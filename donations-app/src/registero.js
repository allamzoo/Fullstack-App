import React, { useState } from 'react';
import logo from './logo.png'; // Import the logo image
import './register.css'; // Import the CSS file for styles

function OrganizationRegistration() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    contactNumber: '',
    password: '',
    address: '',
    area: '',
    governorate: '',
    role: '',
    document: null,
  });

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      document: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or perform validation
    console.log(formData);
  };

  return (
    <div className={isDarkTheme ? 'app dark-theme' : 'app'}>
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <button className={isDarkTheme ? 'theme-button dark' : 'theme-button'} onClick={toggleTheme}>
          Toggle theme
        </button>
      </div>
      <div className="donor-registration">
        <h2>Organization Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Organization Name:</label>
            <input type="text" id="name" name="name" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area:</label>
            <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="governorate">Governorate:</label>
            <input type="text" id="governorate" name="governorate" value={formData.governorate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="role">Organization Type:</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="School">School</option>
              <option value="Hospital">Hospital</option>
              <option value="Church">Church</option>
              <option value="Mosque">Mosque</option>
              <option value="Non-Profit">Non-Profit</option>


            </select>
          </div>
          <div className="form-group">
            <label htmlFor="document">Upload Document:</label>
            <input type="file" id="document" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default OrganizationRegistration;
