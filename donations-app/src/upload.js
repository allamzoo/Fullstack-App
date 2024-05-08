import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faHome} from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons
import logo from './label.jpeg';
import './dashboard.css';
import ThemeContext from './ThemeContext'; // Import ThemeContext

function Tabbakh() {
    const [documents, setDocuments] = useState([]);
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access theme context

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setDocuments(files);
    };

    const uploadDocuments = () => {
        // Implement logic to upload and verify documents
        // For this example, we'll just alert the filenames
        const filenames = documents.map(file => file.name);
        alert(`Uploaded documents: ${filenames.join(', ')}`);
        alert('Redirecting to Dashboard/Home Screen...');
        // You can implement actual redirection logic here
        window.location.href = '/'; 
    };
    const home = () => {
        
        window.location.href = '/';
    };

    const renderDocumentUpload = () => {
        return (
            <div className="file-input" style={{ marginBottom: '20px' }}>
                <label htmlFor="documents" style={{ fontSize: '1rem', color: isDarkTheme ? '#fba2d7' : '#fba2d7' }}>Upload Documents:</label>
                <input type="file" id="documents" onChange={handleFileChange} multiple style={{ color: isDarkTheme ? '#fba2d7' : '#fba2d7', backgroundColor: isDarkTheme ? '#333' : '#fff' }} />
            </div>
        );
    };

    return (
        <div className={isDarkTheme ? 'full-screen dark-theme' : 'full-screen light-theme'}>
            <div className="logo-bar" style={{ padding: '20px' }}>
                <img src={logo} className="logo" alt="logo" style={{ width: '600px', height: '120px' }} />
            </div>
            <div style={{ padding: '20px', backgroundColor: isDarkTheme ? '#000' : '#fff', color: isDarkTheme ? '#fff' : '#333' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', color: isDarkTheme ? '#fba2d7' : '#ff69b4' }}>Organization Verification</h2>
                {/* Render document upload */}
                {renderDocumentUpload()}
                {/* Button to upload documents */}
                <button onClick={uploadDocuments} style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#fba2d7', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
                    <FontAwesomeIcon icon={faUpload} style={{ marginRight: '10px' }} />
                    Upload Documents
                </button>
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
        </div>
    );
}

export default Tabbakh;
