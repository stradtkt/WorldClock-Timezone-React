import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Clock from './components/Clock';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Clock/>
        <Footer/>
      </div>
    );
  }
}

export default App;
