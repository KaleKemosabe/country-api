import React, { Component } from 'react';
import axios from 'axios';
import './CountriesAPI.css';

const API = "https://restcountries.eu/rest/v2/all";

class CountriesAPI extends Component {
    state = {
        countries: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(API).then((response) => this.setState({ countries: response.data, isLoading: false }));
    };

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <ul>
                {this.state.countries.map((country) => (
                    <li key={country.alpha3code}>
                        <h3>{country.name}</h3>
                        <p>Capital: {country.capital}</p>
                        <img src={country.flag} alt={country.name} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default CountriesAPI;