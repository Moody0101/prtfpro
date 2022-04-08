import './App.css';
import Nav from './components/js/Nav';
import Home from './components/js/Home';
import Loader from './components/js/Loader';
import { useEffect } from 'react';

const App = () => {
  
  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        document.getElementsByClassName('App')[0].classList.add('loaded');
      }, 5000);
    }
  }, []);

  return (
    <>
      <Loader />
      <div className="App">
        <Nav />
        <Home />    
      </div>
    </>
  );
}

export default  App;