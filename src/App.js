import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero-section/Hero';
import CountriesAPI from './Components/Countries/CountriesAPI';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <CountriesAPI />
      </div>
    );
  }
}

export default App;
