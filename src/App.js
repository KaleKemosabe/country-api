import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero-section/Hero';
import CountriesAPI from './Components/Countries/CountriesAPI';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <CountriesAPI />
        <Footer />
      </div>
    );
  }
}

export default App;
