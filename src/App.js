import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { NewContact } from "./components/NewContact";
import { Footer } from "./components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <a href='https://api.WhatsApp.com/send?phone=5411620493'
      className='btn-wsp' target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"1.3em", color:'white'}}/>
          <span className='icon-whatsapp'></span>
      </a>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <NewContact />
      <Footer />
    </div>
  );
}


export default App;
