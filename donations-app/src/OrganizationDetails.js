// OrganizationDetails.js

import React from 'react';
import { FaDownload, FaCheck, FaTimes, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import LocationMarker from './google.png'; // Importing the location marker image
import { MdDone, MdClose } from 'react-icons/md'; // Importing the accept and reject icons


function OrganizationDetails({ organization }) {
    const { name, foundationDate, hotline, type, address, Area, Governorate, documents } = organization;

    
    const downloadFile = (fileName) => {
        // Create an anchor element
        const anchor = document.createElement('a');
    
        // Set the href attribute to the file path
        anchor.href = fileName;
    
        // Set the download attribute to specify the file name
        anchor.download = fileName;
    
        // Append the anchor to the body
        document.body.appendChild(anchor);
    
        // Trigger a click event on the anchor
        anchor.click();
    
        // Remove the anchor from the body
        document.body.removeChild(anchor);
    };

    return (
        <div className="organization-details">
            <h2>{name}</h2>
            <div className="scrollable-container">
                <p>Foundation Date: {foundationDate}</p>
                <p>Hotline: {hotline}</p>
                <p>Type: {type}</p>
                <p>Location: <FaMapMarkerAlt className="location-icon" /></p>
                <p>Address: {address}</p>
                <p>Area: {Area}</p>
                <p>Governorate: {Governorate}</p>
                <p>Documents: <a href="#" onClick={() => downloadFile(documents)}><FaDownload className="download-icon" /> {documents}</a></p>
            </div>
        </div>
    );
}

export default OrganizationDetails;
