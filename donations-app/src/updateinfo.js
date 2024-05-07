import React, { useState, useContext } from 'react';
import logo from './label.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css'; // Import the CSS file for styling
import './updateinfo.css'; // Import the CSS file for styling
import ThemeContext from './ThemeContext'; // Import ThemeContext

function AccountSettings() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add more fields as needed
    });

    const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access theme context

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveAccountInfo = () => {
        // Implement your logic here to save/update the account information
        // For this example, we'll just alert the account details
        alert(`Account information saved/updated:\nName: ${formData.name}\nEmail: ${formData.email}`);

        // Redirect to Dashboard/Home Screen (simulated with an alert)
        alert('Redirecting to Dashboard/Home Screen...');
        // You can implement actual redirection logic here
        window.location.href = '/'; 
    };
    const home = () => {
        
        window.location.href = '/';
    };

    const deleteAccount = () => {
        // Implement your logic here to delete the account
        // For this example, we'll just alert the deletion confirmation
        if (window.confirm('Are you sure you want to delete your account?')) {
            alert('Account deleted successfully!');
            // Redirect to Login/Signup Screen (simulated with an alert)
            alert('Redirecting to Login/Signup Screen...');
            // You can implement actual redirection logic here
            window.location.href = '/'; 
        }
    };

    return (
        <div className={isDarkTheme ? 'full-screen dark-theme' : 'full-screen light-theme'}>
            <div className="logo-bar" style={{ padding: '10px' }}>
                <img src={logo} className="logo" alt="logo" style={{ width: '600px', height: '120px' }} />
            </div>
            <div style={{ padding: '20px', position: 'relative' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', color: isDarkTheme ? '#fba2d7' : '#333' }}>Account Settings</h2>
                <div className="account-input" style={{ marginBottom: '20px' }}>
                    <label htmlFor="name" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#333' }}>Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', fontSize: '1rem', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fba2d7' : '#333' }} />
                </div>
                <div className="account-input" style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#333' }}>Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', fontSize: '1rem', backgroundColor: isDarkTheme ? '#333' : '#fff', color: isDarkTheme ? '#fba2d7' : '#333' }} />
                </div>
                {/* Add more input fields as needed */}
                <button onClick={saveAccountInfo} style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#fba2d7', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>Save Account Info</button>
                <button onClick={deleteAccount} style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#fba2d7', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>Delete account</button>
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

export default AccountSettings;
