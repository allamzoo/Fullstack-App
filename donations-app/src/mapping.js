import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import logo from './label.jpeg';
import mapImage from './map.png'; // Import the map image
import './dashboard.css'
import ThemeContext from './ThemeContext'; // Import ThemeContext

function LocationMappingScreen() {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postal, setPostal] = useState('');
    const [country, setCountry] = useState('');

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access theme context

    const saveLocation = () => {
        const address = `${street}, ${city}, ${state}, ${postal}, ${country}`;
        alert(`Location saved/updated:\n${address}`);
        alert('Redirecting to Dashboard/Home Screen...');
        window.location.href = '/';
    };
    const home = () => {
        
        window.location.href = '/';
    };

    return (
        <div className={isDarkTheme ? 'full-screen dark-theme' : 'full-screen light-theme'}>
            <div className="logo-bar" style={{ padding: '10px' }}>
                <img src={logo} className="logo" alt="logo" style={{ width: '600px', height: '120px' }} />
            </div>
            <div className="center-content" style={{ position: 'relative', padding: '10px', marginTop: '90px' }}>
                <h2 style={{ marginBottom: '10px', fontSize: '1.5rem', textAlign: 'center', color: isDarkTheme ? '#fba2d7' : '#333' }}>Location Mapping Screen</h2>
                <img src={mapImage} alt="map" style={{ width: '15%', marginBottom: '10px', display: 'block', margin: '0 auto' }} />
                <div className="address-input" style={{ marginBottom: '10px', textAlign: 'center' }}>
                    <label htmlFor="street" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }}>Street Address:</label>
                    <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)} style={{ width: '100%', padding: '5px', boxSizing: 'border-box', fontSize: '0.8rem', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }} />
                </div>
                <div className="address-input" style={{ marginBottom: '10px', textAlign: 'center' }}>
                    <label htmlFor="city" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }}>City:</label>
                    <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} style={{ width: '100%', padding: '5px', boxSizing: 'border-box', fontSize: '0.8rem', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }} />
                </div>
                <div className="address-input" style={{ marginBottom: '10px', textAlign: 'center' }}>
                    <label htmlFor="state" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }}>State/Province:</label>
                    <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} style={{ width: '100%', padding: '5px', boxSizing: 'border-box', fontSize: '0.8rem', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }} />
                </div>
                <div className="address-input" style={{ marginBottom: '10px', textAlign: 'center' }}>
                    <label htmlFor="postal" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }}>Postal Code:</label>
                    <input type="text" id="postal" value={postal} onChange={(e) => setPostal(e.target.value)} style={{ width: '100%', padding: '5px', boxSizing: 'border-box', fontSize: '0.8rem', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }} />
                </div>
                <div className="address-input" style={{ marginBottom: '10px', textAlign: 'center' }}>
                    <label htmlFor="country" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }}>Country:</label>
                    <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: '100%', padding: '5px', boxSizing: 'border-box', fontSize: '0.8rem', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <button onClick={saveLocation} className="common-button" style={{ width: '300px', fontSize: '0.8rem' }}>Save/Update Location</button>
                </div>
            </div>
            <div className="button-container">    
            <label className="theme-switch" htmlFor="theme-switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <div className="slider"></div>
        </label>
         
          <button className="home-button" onClick={home}>
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />
           Home
          </button>
          </div>
        </div>
    );
}

export default LocationMappingScreen;
