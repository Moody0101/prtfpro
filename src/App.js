import './App.css';
import Nav from './components/js/Nav';
import Home from './components/js/Home';
import Loader from './components/js/Loader';
import About from './components/js/About';
import Work from './components/js/Work';
import Footer from './components/js/Footer';
import Contact from './components/js/Contactme';
import PagtNotFound from './components/js/PagtNotFound';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        document.getElementsByClassName('App')[0].classList.add('loaded');
      }, 5000);
    }
  }, []);

  return (
    <Router>
      <Loader />
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Work" element={<Work />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>

        {/*Error page*/}

          <Route path="*" element={<PagtNotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default  App;