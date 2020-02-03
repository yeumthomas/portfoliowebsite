import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Experience />
      {/* <Contact /> */}
        <div className="footer"><p className="footer-text">© Thomas Yeum 2020</p></div>
      </div>
    );

  }
}

export default App;
