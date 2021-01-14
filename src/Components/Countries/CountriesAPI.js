import React, { Component } from 'react';
import axios from 'axios';
import './CountriesAPI.css';
import { Button, Modal } from 'react-bootstrap';
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
                <h2 className="list-title">European Countries</h2>
                <h4 className="api-info">Country information via a RESTful API (<i>restcountries.eu</i>)</h4>
                <h4 className="others"><i>Other regions coming soon...</i></h4>
                {/* <section className="region-selection">
                    <Button variant="secondary">Asia</Button>
                    <Button variant="secondary">Europe</Button>
                    <Button variant="secondary">Oceania</Button>
                    <Button variant="secondary">Africa</Button>
                    <Button variant="secondary">Americas</Button>
                    <Button variant="secondary">Polar</Button>
                </section> */}
                <ul>
                    {this.state.countries.map((country) => (
                        <li key={country.alpha3code}>
                            <h3>{country.name}</h3>
                            <img src={country.flag} alt={country.name} />
                            <Button variant="link" onClick={() => {this.handleModal()}}>Details</Button>
                            <Modal show={this.state.show} onHide={() => this.closeModal()}>
                                <Modal.Header closeButton><b>{country.name}</b></Modal.Header>
                                <Modal.Body>
                                    <p>Capital: {country.capital}</p>
                                    <p>Population: {country.population}</p>
                                    <p>Native name: {country.nativeName}</p>
                                    <p>Borders: {country.borders}</p>
                                </Modal.Body>
                            </Modal>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default CountriesAPI;