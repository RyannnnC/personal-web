import Home from './home.js'
import AboutMe from './aboutme.js'
import ContactMe from './contactme.js'
import Career from './career';
import Games from './games';
import Blog from './blog';
import Like from '../component/like'
import MySkill from './mySkill.js';

function Index(props) {
      return (
        <div>
            <Home/>
            <AboutMe/>
            <MySkill/>
            <Career/>
            <Blog/>
            <Games/>
            <ContactMe
                showAlert = {props.showAlert}
            />
        </div>
      );
}
export default Index;
