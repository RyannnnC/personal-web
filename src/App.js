import { Component } from 'react';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Index from './pages/index.js';
import {FlappyBird} from './component/flappybird';
import Huarong from './component/huarong';
import Genshin from './component/genshin';
import MenuBar from './component/menuBar.js';
import Footer from './component/footer.js';
// import ScrollToTop from './component/scrollToTop.js'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
    <Router>
      <div>
        <MenuBar/>       
        {/* <ScrollToTop/> */}
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
        <Routes>
          <Route path="/" element={<Index
            showAlert = {this.showAlert}
          />}/>
          <Route path='/huarongdao' element={<Huarong/>}/>
          <Route path='/flappybird' element={<FlappyBird store={this.props.store} updateFrame={this.props.updateFrame} game={this.props.game} stats={this.props.stats} rungame={this.props.rungame} birdjump={this.props.birdjump}/>}/>
          <Route path='/memory' element={<Genshin/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
