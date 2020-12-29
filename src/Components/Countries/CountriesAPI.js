import React, { Component } from 'react';
import axios from 'axios';
import Popup from '../Popup/Popup';
import './CountriesAPI.css';
import { Button, Modal } from 'react-bootstrap';
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
        show: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(API).then((response) => this.setState({ continents: response.data, countries: response.data, isLoading: false }));
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
                <h4><i>Other regions coming soon...</i></h4>
                <section className="region-selection">
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
                            <img src={country.flag} alt={country.name} />
                            <Button variant="link" onClick={() => {this.handleModal()}}>Details</Button>
                            {/* <input className="button" type="submit" value="See more" />{" "} */}
                            <Modal show={this.state.show} onHide={() => this.closeModal()}>
                                <Modal.Header closeButton>Header</Modal.Header>
                                <Modal.Body>
                                    react Body
                                </Modal.Body>
                                <Modal.Footer>footer</Modal.Footer>
                            </Modal>
                        </li>
                    ))}
                </ul>
                {this.state.showPopup && (
                <Popup 
                    name={this.state.name}
                    capital={this.state.capital}
                    region={this.state.region}
                    subregion={this.state.subregion}
                    population={this.state.population}
                />
                )}
            </>
        );
    }
}

export default CountriesAPI;