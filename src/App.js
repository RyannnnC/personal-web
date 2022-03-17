import { Component } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Home from './pages/home.js'
import AboutMe from './pages/aboutme.js'
import ContactMe from './pages/contactme.js'
import MenuBar from './component/menuBar.js';
import Footer from './component/footer.js';
import ScrollToTop from './component/scrollToTop.js'
import './App.scss';
import './i18n.js';

Amplify.configure(awsExports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  async componentDidMount() {
  }

  render() {
    
    return (
      <div>
        <MenuBar/>
        <Home/>
        <AboutMe/>
        <ContactMe/>
        <ScrollToTop/>
        <Footer/>
      </div>
    );
  }
}

export default App;
