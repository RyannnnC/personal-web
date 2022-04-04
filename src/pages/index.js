import Home from './home.js'
import AboutMe from './aboutme.js'
import ContactMe from './contactme.js'
import Projects from './projects';
import Games from './games';

function Index(props) {
      return (
        <div>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Games/>
            <ContactMe
                showAlert = {props.showAlert}
            />
        </div>
      );
}
export default Index;
