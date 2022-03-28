import { Component } from 'react';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Home from './pages/home.js'
import AboutMe from './pages/aboutme.js'
import ContactMe from './pages/contactme.js'
import MenuBar from './component/menuBar.js';
import Footer from './component/footer.js';
import ScrollToTop from './component/scrollToTop.js'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './App.scss';
import './i18n.js';

Amplify.configure(awsExports);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      alertOpen: false,
      alertType: "info",
      alertMsg: 'None',
    };
    this.showAlert = this.showAlert.bind(this);
  }

  async componentDidMount() {
  }

  showAlert(type, msg) {
    this.setState({
      alertType: type,
      alertMsg: msg,
      alertOpen:true
    });
  }

  render() {
    
    return (
      <div>
        <MenuBar/>
        <Home/>
        <AboutMe/>
        <ContactMe
          showAlert = {this.showAlert}
        />
        <ScrollToTop/>
        <Footer/>
        <Snackbar 
          open={this.state.alertOpen} 
          autoHideDuration={6000} 
          onClose={()=> this.setState({alertOpen: false})}
          anchorOrigin={{ 
            vertical: 'top', 
            horizontal: 'center' 
          }}>
          <Alert onClose={()=> this.setState({alertOpen: false})} severity={this.state.alertType} sx={{ width: '100%' }}>
            {this.state.alertMsg}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default App;
