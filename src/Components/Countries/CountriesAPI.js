import React, { Component } from 'react';
import axios from 'axios';
import './CountriesAPI.css';
const API = "https://restcountries.eu/rest/v2/region/europe";

class CountriesAPI extends Component {
    state = {
        name: "",
        capital: "",
        region: "",
        subregion: "",
        population: "",
        countries: [],
        isLoading: false,
        show: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get(API).then((response) => this.setState({ countries: response.data, isLoading: false }));
    };

    handleModal() {
        this.setState({show:true})
    }

    closeModal() {
        this.setState({show:false})
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <>
                <div className="title-container">
                    <h2 className="list-title">European Countries</h2>
                    <h4 className="api-info">Quick country facts including name, capital, population and flag. Search field at the bottom for checking out same details outside of Europe. Country information via a RESTful API (<i>restcountries.eu</i>)</h4>
                </div>
                <ul>
                    {this.state.countries.map((country) => (
                        <li key={country.alpha3code}>
                            <h3>{country.name}</h3>
                            <h5>Capital: {country.capital}</h5>
                            <h5>Population: {country.population}</h5>
                            <img src={country.flag} alt={country.name} />
                            {/* <Button variant="link" onClick={() => {this.handleModal()}}>Details</Button>
                            <Modal show={this.state.show} onHide={() => this.closeModal()}>
                                <Modal.Header closeButton><b>{country.name}</b></Modal.Header>
                                <Modal.Body>
                                    <p>Capital: {country.capital}</p>
                                    <p>Population: {country.population}</p>
                                    <p>Native name: {country.nativeName}</p>
                                    <p>Borders: {country.borders}</p>
                                </Modal.Body>
                            </Modal> */}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default CountriesAPI;