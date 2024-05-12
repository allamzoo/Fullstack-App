import React, { useState } from 'react';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import './HomeScreen.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdateAccount() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add more fields as needed
    });

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const HomeButton = () => {
        const navigate = useNavigate();
      
        const handleHomeClick = () => {
          navigate(-1); // Go back to the previous page
        };
      
        return (
          <button onClick={handleHomeClick}>Back</button>
        );
      };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
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
        <div className={isDarkTheme ? 'home-container dark-theme' : 'home-container'}>
        <div className="top-bar">
          <img src={logo} alt="Logo" className="logo" />
          <label className="theme-switch" htmlFor="theme-switch">
            <input
              type="checkbox"
              id="theme-switch"
              checked={isDarkTheme}
              onChange={toggleTheme}
            />
            <div className="slider round"></div>
          </label>
          <div class="dropdown">
    <button class="dropbtn"> &#9776;</button>
    <div class="dropdown-content">
    <Link to="/hs" style={{ textDecoration: 'none' }}>
    
    <HomeButton />
    </Link>
    
    <Link to="/l" style={{ textDecoration: 'none' }}>
      <button>Sign Out</button>
      </Link>
   
    </div>
    </div>
          
        </div>
        
            <div style={{ padding: '20px', position: 'relative', textAlign: 'center' }}>
                <h5 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Update/Delete Account Information</h5>
                <div className="account-input" style={{ marginBottom: '20px' }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '300px', padding: '12px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '5px', marginBottom: '10px' }} />
                </div>
                <div className="account-input" style={{ marginBottom: '20px' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: '300px', padding: '12px', fontSize: '1rem', border: '2px solid #ccc', borderRadius: '5px', marginBottom: '20px' }} />
                </div>
                {/* Add more input fields as needed */}
                <button onClick={saveAccountInfo} className="confirm-button">Save Account Info</button>
                <button onClick={deleteAccount} className="confirm-button">Delete account</button>
            </div>
        </div>
    );
}

export default UpdateAccount;