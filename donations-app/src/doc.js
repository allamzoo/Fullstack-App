import React, { useState } from 'react';
import logo from './logo.png'; // Import your logo image
import './HomeScreen.css'; // Import the CSS file for styles

function MedicalCasesPage() {
  // Sample medical cases data
  const [medicalCases, setMedicalCases] = useState([
    {
      id: 1,
      patientName: 'Fared Wael',
      age: 35,
      gender: 'Male',
      weight: 70,
      location: 'Coordinates: (XX.XXXXXX, YY.YYYYYY)',
      address: '123 Makka Street',
      organization: 'EL Nozha Hospital',
      specialty: 'Cardiology',
      area: 'Heliopolis', // Add area field
      governorate: 'Cairo', // Add governorate field
      description: 'A 35 Year Old Male Suffering From Ischemic Heart Disease',
      fulfilled: false, // Add fulfilled property
    },
    {
      id: 2,
      patientName: 'Sara Ibrahim',
      age: 5,
      gender: 'Female',
      weight: 65,
      location: 'Coordinates: (AA.AAAAAA, BB.BBBBBB)',
      address: '456 Elmosher Street',
      organization : 'EL Nas',
      specialty: 'Orthopedics',
      area: 'Haram', // Add area field
      governorate: 'Giza', // Add governorate field
      description: 'A 5 Year Old Female Suffering From Rickets',
      fulfilled: false, // Add fulfilled property
    },
    // Add more sample medical cases as needed
  ]);

  // State for selected case and modal visibility
  const [selectedCase, setSelectedCase] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [fulfilledCases, setFulfilledCases] = useState([]); // State for tracking fulfilled cases
  const [showRightSign, setShowRightSign] = useState(false); // State for showing the right sign
  const [showFulfillPopup, setShowFulfillPopup] = useState(false); // State for showing the fulfillment popup

  // State for filter options
  const [filterOptions, setFilterOptions] = useState({
    specialty: '',
    organization: '',
    area: '',
    governorate: '',
  });

  // State for dark theme
  const [darkTheme, setDarkTheme] = useState(false);

  // Function to handle viewing details of a medical case
  const handleViewDetails = (medicalCase) => {
    setSelectedCase(medicalCase);
    setModalVisible(true);
  };

  // Function to handle fulfilling the medical case
  const handleFulfillCase = (medicalCase) => {
    if (!medicalCase.fulfilled) {
      // If the case is not fulfilled, mark it as fulfilled
      setMedicalCases(
        medicalCases.map((item) =>
          item.id === medicalCase.id ? { ...item, fulfilled: true } : item
        )
      );
      setFulfilledCases([...fulfilledCases, medicalCase.id]); // Add the fulfilled case to the list
      setShowRightSign(medicalCase.id); // Show the right sign for this specific case
      setShowFulfillPopup(true); // Show the fulfillment popup
      setTimeout(() => {
        setShowFulfillPopup(false); // Hide the fulfillment popup after 3 seconds
      }, 3000);
      setTimeout(() => {
        setShowRightSign(false); // Hide the right sign after 2 seconds
      }, 2000);
    } else {
      // If the case is already fulfilled, mark it as unfulfilled
      setMedicalCases(
        medicalCases.map((item) =>
          item.id === medicalCase.id ? { ...item, fulfilled: false } : item
        )
      );
      setFulfilledCases(fulfilledCases.filter((f) => f !== medicalCase.id)); // Remove the fulfilled case from the list
    }
  };

  // Function to handle filtering medical cases
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  // Function to apply filters to medical cases
  const applyFilters = (medicalCase) => {
    return (
      (filterOptions.specialty === '' || medicalCase.specialty === filterOptions.specialty) &&
      (filterOptions.organization === '' || medicalCase.organization === filterOptions.organization) &&
      (filterOptions.area === '' || medicalCase.area === filterOptions.area) &&
      (filterOptions.governorate === '' || medicalCase.governorate === filterOptions.governorate)
    );
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
          <div class="dropdown">
  <button class="dropbtn"> &#9776;</button>
  <div class="dropdown-content">
    <button>Sign Out</button>
    <button>Update/Delete Account</button>
    <button>Home</button>
  </div>
</div>
        </div>
      </div>
      {/* Filter options */}
      <div className="filters">
      <h1>View Medical Cases</h1>

        <h2>Filter Options</h2>
        <div className="filter-option">
          <div className="filter-option">
            <div>
              <label htmlFor="specialty">Specialty:</label>
            </div>
            <div>
              <select id="specialty" name="specialty" value={filterOptions.specialty} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Orthopedics">Orthopedics</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="filter-option">
            <div>
              <label htmlFor="organization">Organization Name:</label>
            </div>
            <div>
              <select id="organization" name="organization" value={filterOptions.organization} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="EL Nozha Hospital">EL Nozha Hospital</option>
                <option value="EL Nas">EL Nas</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="filter-option">
            <div>
              <label htmlFor="area">Area:</label>
            </div>
            <div>
              <select id="area" name="area" value={filterOptions.area} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Heliopolis">Heliopolis</option>
                <option value="Haram">Haram</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="filter-option">
            <div>
              <label htmlFor="governorate">Governorate:</label>
            </div>
            <div>
              <select id="governorate" name="governorate" value={filterOptions.governorate} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Display medical cases */}
      <div className="medical-cases">
        {medicalCases.filter(applyFilters).map((medicalCase) => (
          <div key={medicalCase.id} className="requested-items">
            <li className="medical-case">
              <h2>{medicalCase.patientName}</h2>
              <p>Specialty: {medicalCase.specialty}</p>
              <p>Organization Name: {medicalCase.organization}</p>
              <p>Location: {medicalCase.location}</p>
              <p>Area: {medicalCase.area}</p> {/* Display area */}
              <p>Governorate: {medicalCase.governorate}</p> {/* Display governorate */}
              {/* Change the emoji to an eye for selection */}
              <span className={`popup-trigger ${darkTheme ? 'black-emoji' : ''}`} role="img" aria-label="Select Case" onClick={() => handleViewDetails(medicalCase)}>👁️</span>
              <button className="fulfill-button" onClick={() => handleFulfillCase(medicalCase)}>
                {medicalCase.fulfilled ? 'Unfulfill this case' : 'Fulfill this case'}
              </button>
            </li>
          </div>
        ))}
      </div>
      {/* Modal for displaying case details */}
      {modalVisible && selectedCase && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
            <h2>Medical Case Details</h2>
            <p>Patient Name: {selectedCase.patientName}</p>
            <p>Age: {selectedCase.age}</p>
            <p>Gender: {selectedCase.gender}</p>
            <p>Weight: {selectedCase.weight}</p>
            <p>Location: {selectedCase.location}</p>
            <p>Address: {selectedCase.address}</p>
            <p>Organization: {selectedCase.organization}</p>
            <p>Specialty: {selectedCase.specialty}</p>
            <p>Description: {selectedCase.description}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
      {/* Popup for fulfillment celebration */}
      {showFulfillPopup && (
        <div className="fulfilled-popup">
          <div className="celebration">
            {/* Emoji fireworks */}
            <span className="fireworks" role="img" aria-label="Fireworks">🎉</span>
            <span className="fireworks" role="img" aria-label="Fireworks">🎈</span>
            <span className="fireworks" role="img" aria-label="Fireworks">🎉</span>
            <span className="fireworks" role="img" aria-label="Fireworks">🎈</span>
            <span className="fireworks" role="img" aria-label="Fireworks">🎉</span>
          </div>
          <p>You have fulfilled successfully!</p>
        </div>
      )}
    </div>
  );
}

export default MedicalCasesPage;
