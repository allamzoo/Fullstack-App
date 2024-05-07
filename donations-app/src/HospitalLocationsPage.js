import React, { useState } from 'react';
import HospitalAMap from './HospitalAMap.jpg';
import HospitalBMap from './HospitalBMap.jpg';
import logo from './logo.png';
import './HP.css';

const HospitalLocationsPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'home-container dark-theme' : 'home-container'}>
      <div className="top-bar">
        <img className="logo" src={logo} alt="Logo" />
        <div className="theme-switch">
          <input
            type="checkbox"
            id="switch"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <label htmlFor="switch" className="slider round"></label>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <h1>Welcome to Hospital Locations</h1>
          <p>Find the locations of our hospitals below</p>
        </div>
        <div className="hospital-locations">
          <div className="hospital">
            <img src={HospitalAMap} alt="Hospital A Map" />
            <div className="hospital-info">
              <h2>Hospital A</h2>
              <p>Ibn Sinah Hospital, 43 Mossadak Street, Dokki<a href="https://maps.google.com?q=26Q5+X8X,%20Ad%20Doqi,%20Dokki,%20Giza%20Governorate%203751133&ftid=0x1458474d74f0c619:0x1c3cfe8993b8df9&entry=gps&lucs=,47071704,47069508,94218635,47084304,94208458,94208447&g_st=iw"> View on Map</a></p>
            </div>
          </div>
          <div className="hospital">
            <img src={HospitalBMap} alt="Hospital B Map" />
            <div className="hospital-info">
              <h2>Hospital B</h2>
              <p>EL Nozha Hospital, 43 Ankara Street, Sheraton Al Matar.<a href="https://maps.app.goo.gl/NwN2AkxFHGyoecgu9?g_st=iw">  View on Map</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalLocationsPage;
