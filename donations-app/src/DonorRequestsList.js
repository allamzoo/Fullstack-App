
import React from 'react';
import { FaDownload, FaCheck, FaTimes, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

function DonorRequestsList({ donorRequests }) {
    const { name, age, bloodType, location, job, number, documents} = donorRequests;
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
    <div className="donor-requests-list">
      <h2>Donor Requests List</h2>
      <ul>
        {donorRequests.map((donor, index) => (
          <li key={index}>
            <p>Name: {donor.name}</p>
            <p>Age: {donor.age}</p>
            <p>Blood Type: {donor.bloodType}</p>
            <p>Location: {donor.location}</p>
            <p>Job: {donor.job}</p>
            <p>Number: {donor.number}</p>
            <p>Documents: <a href="#" onClick={() => downloadFile(documents)}><FaDownload className="download-icon" /> {documents}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonorRequestsList;
