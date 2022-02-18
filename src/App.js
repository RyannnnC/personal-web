import { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createNote, deleteNote } from './graphql/mutations';
import { listNotes } from './graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleClick = () => {
    this.props.addNote(this.state);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div style={styles.form}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="New Note"
          style={styles.input}
        />
        <button onClick={this.handleClick} style={styles.addButton}>Add Note</button>
      </div>
    );
  }
}

class NotesList extends Component {
  render() {
    return (
      <div>
        {this.props.notes.map(note =>
          <div key={note.id} style={styles.note}>
            <p>{note.text}</p>
            <button onClick={() => { this.props.deleteNote(note) }} style={styles.deleteButton}>x</button>
          </div>
        )}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  async componentDidMount() {
    var result = await API.graphql(graphqlOperation(listNotes));
    this.setState({ notes: result.data.listNotes.items });
  }

  deleteNote = async (note) => {
    const id = {
      id: note.id
    };
    await API.graphql(graphqlOperation(deleteNote, { input: id }));
    this.setState({ notes: this.state.notes.filter(item => item.id !== note.id) });
  }

  addNote = async (note) => {
    var result = await API.graphql(graphqlOperation(createNote, { input: note }));
    this.state.notes.push(result.data.createNote);
    this.setState({ notes: this.state.notes });
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>Notes App</h1>
        <AddNote addNote={this.addNote} />
        <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
        <button onClick={this.props.signOut}>Sign out</button>
      </div>
    );
  }
}

export default withAuthenticator(App);

const styles = {
  container: { width: 480, margin: '0 auto', padding: 20 },
  form: { display: 'flex', marginBottom: 15 },
  input: { flexGrow: 2, border: 'none', backgroundColor: '#ddd', padding: 12, fontSize: 18 },
  addButton: { backgroundColor: 'black', color: 'white', outline: 'none', padding: 12, fontSize: 18 },
  note: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22, marginBottom: 15 },
  deleteButton: { fontSize: 18, fontWeight: 'bold' }
}
