import React, { Component } from 'react';
import axios from 'axios';
import Popup from '../Popup/Popup';
import './CountriesAPI.css';
// const API = "https://restcountries.eu/rest/v2/all";
const API = "https://restcountries.eu/rest/v2/region/europe";

class CountriesAPI extends Component {
    state = {
        continents: [
            {value: 'Asia'},
            {value: 'Europe'},
            {value: 'Oceania'},
            {value: 'Africa'},
            {value: 'Americas'},
            {value: 'Polar'},
        ],
        countries: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(API).then((response) => this.setState({ continents: response.data, countries: response.data, isLoading: false }));
    };

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <>
                <h1 className="list-title">Region - Europe</h1>
                <h2 className="api-info">Country information via a RESTful API (<i>restcountries.eu</i>)</h2>
                <h2><i>Other regions coming soon...</i></h2>
                <section className="region-selection">
                    {/* <button onClick={this.regionSelector}>Asia</button> */}
                    <button>Asia</button>
                    <button>Europe</button>
                    <button>Oceania</button>
                    <button>Africa</button>
                    <button>Americas</button>
                    <button>Polar</button>
                </section>
                <ul>
                    {this.state.countries.map((country) => (
                        <li key={country.alpha3code}>
                            <h3>{country.name}</h3>
                            <p className="capital">Capital: {country.capital}</p>
                            <img src={country.flag} alt={country.name} />
                            <input className="button" type="submit" value="See more" />{" "}
                        </li>
                    ))}
                </ul>
                {this.state.showPopup && (
                <Popup 
                    name={this.state.name}
                    name={this.state.capital}
                    name={this.state.region}
                    name={this.state.subregion}
                    name={this.state.population}
                />
                )}
            </>
        );
    }
}

export default CountriesAPI;