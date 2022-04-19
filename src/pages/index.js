import Home from './home.js'
import AboutMe from './aboutme.js'
import ContactMe from './contactme.js'
import Career from './career';
import Games from './games';
import Blog from './blog';

function Index(props) {
      return (
        <div>
            <Home/>
            <AboutMe/>
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
