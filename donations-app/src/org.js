import React, { useState } from 'react';
import logo from './logo.png'; // Import the logo image
import './HomeScreen.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ViewRegisteredOrganizations() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    area: '',
    governorate: '',
    organizationType: '',
  });

  const HomeButton = () => {
    const navigate = useNavigate();
  
    const handleHomeClick = () => {
      navigate(-1); // Go back to the previous page
    };
  
    return (
      <button onClick={handleHomeClick}>Home</button>
    );
  };
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const fetchRegisteredOrganizations = () => {
    // Simulated registered organizations data
    return [
      {
        id: 1,
        name: 'Al Nas',
        area: 'Heliopolis',
        governorate: 'Cairo',
        organizationType: 'NGO',
        contact: 'John Doe',
        email: 'contact@organizationA.com',
        address: '123 Street, Heliopolis, Cairo',
        location: 'Coordinates: (XX.XXXXXX, YY.YYYYYY)',
      },
      {
        id: 2,
        name: '57357',
        area: 'Dokki',
        governorate: 'Giza',
        organizationType: 'Hospital',
        contact: 'Jane Smith',
        email: 'contact@organizationB.com',
        address: '456 Street, Dokki, Giza',
        location: 'Coordinates: (AA.AAAAAA, BB.BBBBBB)',
      },
      // Add more organizations as needed
    ];
  };

  const applyFilters = (organization) => {
    return (
      (filterOptions.area === '' || organization.area === filterOptions.area) &&
      (filterOptions.governorate === '' || organization.governorate === filterOptions.governorate) &&
      (filterOptions.organizationType === '' || organization.organizationType === filterOptions.organizationType)
    );
  };

  const getFilteredOrganizations = () => {
    const organizations = fetchRegisteredOrganizations();
    const filteredOrganizations = organizations.filter(applyFilters);
    if (searchQuery) {
      return filteredOrganizations.filter(org => org.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return filteredOrganizations;
  };

  const handleViewDetails = (organization) => {
    setSelectedOrganization(organization);
  };

  const closeModal = () => {
    setSelectedOrganization(null);
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
  <button>Update/Delete Account</button>

</div>
</div>
      
    </div>
      <div className="organization-list">
        <h2>Registered Organizations</h2>
        {/* Search bar */}
        <div className="search-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <input 
    type="text" 
    placeholder="Search by organization name" 
    value={searchQuery} 
    onChange={handleSearchChange} 
    style={{
      padding: '12px', // Increase padding for bigger size
      width: '70%', // Adjust width as needed
      maxWidth: '400px', // Limit maximum width
      border: '1px solid #ccc', 
      borderRadius: '5px',
    }}
  />
</div>
        {/* Filter options */}
        <div className="filters">
          <h3>Filter Options</h3>
          <div className="filter-options">
            <div className="filter-option">
              <label htmlFor="area">Area:</label>
              <select id="area" name="area" value={filterOptions.area} onChange={handleFilterChange}>
                <option value="">All</option>
                {/* Add options dynamically */}
                <option value="Heliopolis">Heliopolis</option>
                <option value="Dokki">Dokki</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="governorate">Governorate:</label>
              <select id="governorate" name="governorate" value={filterOptions.governorate} onChange={handleFilterChange}>
                <option value="">All</option>
                {/* Add options dynamically */}
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="filter-option">
              <label htmlFor="organizationType">Organization Type:</label>
              <select id="organizationType" name="organizationType" value={filterOptions.organizationType} onChange={handleFilterChange}>
                <option value="">All</option>
                {/* Add options dynamically */}
                <option value="NGO">NGO</option>
                <option value="Hospital">Hospital</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
        {/* Display registered organizations */}
        <div className="organization-list">
          {getFilteredOrganizations().map((organization) => (
            <div key={organization.id} className="organization-item">
              <div className="organization-details">
                <h3>{organization.name}</h3>
                <p>Area: {organization.area}</p>
                <p>Governorate: {organization.governorate}</p>
                <span className="popup-trigger" onClick={() => handleViewDetails(organization)}>👁️</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal to display organization details */}
      {selectedOrganization && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedOrganization.name}</h2>
            <p>Area: {selectedOrganization.area}</p>
            <p>Governorate: {selectedOrganization.governorate}</p>
            <p>Type: {selectedOrganization.organizationType}</p>
            <p>Contact: {selectedOrganization.contact}</p>
            <p>Email: {selectedOrganization.email}</p>
            <p>Address: {selectedOrganization.address}</p>
            <p>Location marker: {selectedOrganization.location}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewRegisteredOrganizations;
