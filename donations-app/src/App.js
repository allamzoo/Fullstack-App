import React from 'react';
import './App.css'; // Import the CSS file for styles
import ClinicLocation from './ClinicLocation'; // Import the ClinicLocation component
import SubjectAndClassSelection from './SubjectAndClassSelection';
import logo from './logo.png'; // Import the logo image
import Login from './login';
import HomeScreen from './HomeScreen';
import HomeScreenDR from './HomeScreenDR';
import HomeScreenT from './HomeScreenT';
import UpdateAccount from './UpdateAccount';
import HospitalLocationsPage from './HospitalLocationsPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Add your main application content here */}
        <HomeScreenDR
         /> {/* Render the ClinicLocation component */}
      </header>
    </div>
  );
}

export default App;
