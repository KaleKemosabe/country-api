import React from 'react';
import './Popup.css';

const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <>
        <div className="overlay">
            <div className="popup">
                <h1>This is {props.name}</h1>
                <div>
                    <p>
                        Capital: <span>{props.capital}</span>
                    </p>
                    <p>
                        Region: <span>{props.region}</span>
                    </p>
                    <p>
                        Subregion: <span>{props.subregion}</span>
                    </p>
                    <p>
                        Population: <span>{props.population}</span>
                    </p>
                    <button onClick={closeHandler}>X</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Popup;