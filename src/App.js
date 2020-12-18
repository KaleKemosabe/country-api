import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero-section/Hero';
import CountriesAPI from './Components/Countries/CountriesAPI';
// import Popup from './Components/Popup/Popup';
import Footer from './Components/Footer/Footer';

class App extends Component {
  state = {
    showPopup:false,
    name: "",
    capital: "",
    region: "",
    subregion: "",
    population: "",
  };

  changeValueHandler = (event) => {
    console.log("testing stuff");
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    console.log('test popup');
    this.setState({
      showPopup: true,
    });
// use preventDefault to keep the popup on screen
    event.preventDefault();
  };


  render() {
    return (
      <>
        <Header />
        <div className="main-area">
          <Hero />
          <CountriesAPI />
          {/* <Popup /> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
