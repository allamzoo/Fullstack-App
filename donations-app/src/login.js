import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import logo from './logo.png'; // Import the logo image
import './login.css'; // Import the CSS file for styles
import './HomeScreen.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [darkTheme, setDarkTheme] = useState(false);
    const navigate = useNavigate(); // Access the navigate function for redirection

    const handleLogin = () => {
        // Check username and password combinations for different roles
        switch (username) {
            case 'admin':
                if (password === 'admin') {
                    // Redirect to admin page
                    navigate('/admin');
                    return;
                }
                break;
            case 'regulardonor':
                if (password === 'regulardonor') {
                    // Redirect to hs page
                    navigate('/hs');
                    return;
                }
                break;
            case 'teacher':
                if (password === 'teacher') {
                    // Redirect to hst page
                    navigate('/hst');
                    return;
                }
                break;
            case 'doctor':
                if (password === 'doctor') {
                    // Redirect to hsd page
                    navigate('/hsd');
                    return;
                }
                break;
            default:
                break;
        }
    
        // Handle invalid credentials
        alert('Invalid username or password');
    };
    

    return (
        <div className={`home-container ${darkTheme ? 'dark-theme' : ''}`}>
            <div className="top-bar">
                <img src={logo} alt="Logo" className="logo" />
                <div className="theme-switch">
                    <label className="switch">
                        <input type="checkbox" checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="login-container">
                <div className="input-container">
                    <input type="text" placeholder="Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="login-button" onClick={handleLogin}>Login</button>
                <p className="registration-text">
                    Don't have an account yet? Explore our registration options below:
                </p>
                <div className="register-buttons">
                    <Link to="/Location" style={{ textDecoration: 'none', marginRight: '10px' }}>
                        <button className="register-button">Register as Donor</button>
                    </Link>
                    <Link to="/aLocation" style={{ textDecoration: 'none', marginRight: '10px' }}>
                        <button className="register-button">Register as Organization</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
