import React, { useState } from "react";
import "./Admin Portalc.css";
import logo from "./logo.png";
import logo2 from "./logo2.jpg"; // Importing the new logo

function ViewOrganizations() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState(null);
  const [organizations, setOrganizations] = useState([
    "Organization 1",
    "Organization 2",
  ]);
  const [registeredOrganizations, setRegisteredOrganizations] = useState([]);
  const [donors, setDonors] = useState([
    { name: "Donor 1", age: 30, gender: "Male", job: "Engineer" },
    { name: "Donor 2", age: 35, gender: "Female", job: "Teacher" },
  ]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [secondDropdownVisible, setSecondDropdownVisible] = useState(false);
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  const [actionButtonsVisible, setActionButtonsVisible] = useState(false);
  const [nameChangeVisible, setNameChangeVisible] = useState(false); // State variable for name change box visibility
  const [newName, setNewName] = useState(""); // State variable to store the new name
  const [passwordChangeVisible, setPasswordChangeVisible] = useState(false); // State variable for password change box visibility
  const [oldPassword, setOldPassword] = useState(""); // State variable to store the old password
  const [newPassword, setNewPassword] = useState(""); // State variable to store the new password
  const [confirmPassword, setConfirmPassword] = useState(""); // State variable to store the confirmed password
  const [homePageText, setHomePageText] = useState("Admin's HomePage"); // State variable for the text in the homepage box
  const [selectedOrgForAction, setSelectedOrgForAction] = useState(null); // State variable to store the selected organization for action
  const [showOptionsBox, setShowOptionsBox] = useState(false); // State variable to control visibility of options box
  const [orgRequestsVisible, setOrgRequestsVisible] = useState(false); // State variable to control visibility of organization requests pop-up box

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setDetails(null);
    setMessage("");
    setSelectedItem(null);
    if (event.target.value === "organization") {
      setSecondDropdownVisible(false);
      setActionButtonsVisible(true);
      setSecondDropdownOptions(organizations);
    } else if (event.target.value === "donors") {
      setSecondDropdownVisible(true);
      setActionButtonsVisible(false);
      setSecondDropdownOptions(donors.map((donor) => donor.name));
    } else {
      setSecondDropdownVisible(false);
      setActionButtonsVisible(false);
    }
  };

  const handleSecondDropdownChange = (event) => {
    setSelectedItem(event.target.value);
    setSelectedOrgForAction(event.target.value);
    setActionButtonsVisible(true);
  };

  const handleActionClick = (action) => {
    setDetails(null);
    setMessage("");

    switch (action) {
      case "accept":
        // Perform accept action for the selected organization
        window.alert(`Accepted "${selectedOrgForAction}" successfully.`);
        break;
      case "reject":
        // Perform reject action for the selected organization
        window.alert(`Rejected "${selectedOrgForAction}" successfully.`);
        break;
      case "details":
        // Perform view details action for the selected organization
        const orgDetails = organizations.find((org) => org === selectedOrgForAction);
        setDetails({
          name: orgDetails,
          location: "Organization Location",
          hotline: "Organization Hotline",
        });
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleOrgRequestsBox = () => {
    setOrgRequestsVisible(!orgRequestsVisible);
  };

  // Function to open the name change box
  const openNameChangeBox = () => {
    setNameChangeVisible(true);
  };

  // Function to close the name change box
  const closeNameChangeBox = () => {
    setNameChangeVisible(false);
  };

  // Function to handle changing the new name
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Function to handle confirming the name change
  const confirmNameChange = () => {
    // Change the name and display a message
    setMessage(`Name changed successfully to "${newName}".`);
    closeNameChangeBox();
    setHomePageText(`${newName}'s HomePage`);
    // Show alert notification
    window.alert(`Name changed successfully to "${newName}".`);
  };

  // Function to handle canceling the name change
  const cancelNameChange = () => {
    // Simply close the name change box
    closeNameChangeBox();
  };

  // Function to open the password change box
  const openPasswordChangeBox = () => {
    setPasswordChangeVisible(true);
  };

  // Function to close the password change box
  const closePasswordChangeBox = () => {
    setPasswordChangeVisible(false);
  };

  // Function to handle changing the old password
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  // Function to handle changing the new password
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  // Function to handle changing the confirmed password
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Function to handle confirming the password change
  const confirmPasswordChange = () => {
    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }
    // Change the password and display a message
    setMessage("Password changed successfully.");
    closePasswordChangeBox();
    // Show alert notification
    window.alert("Password changed successfully.");
  };

  // Function to handle canceling the password change
  const cancelPasswordChange = () => {
    // Simply close the password change box
    closePasswordChangeBox();
  };

  // Function to toggle visibility of options box
  const toggleOptionsBox = () => {
    setShowOptionsBox(!showOptionsBox);
  };

  return (
    <div className={darkTheme ? "dark-container" : "container"}>
      <div className="logo-container">
        <img src={logo2} alt="Logo" className="logo2" />
      </div>
      <div className="profile-view-settings">
        <div className="dropdown">
          <button onClick={toggleDropdown} className="profile-view-button">
            <img src={logo} alt="Logo" className="logo" />
          </button>
          {dropdownVisible && (
            <div className="top-right-buttons">
              <button className="box-button" onClick={openNameChangeBox}>
                Delete Users
              </button>
              <button className="box-button" onClick={openPasswordChangeBox}>
                Change Password
              </button>
              <button className="box-button">Sign out</button>
            </div>
          )}
        </div>
        <div className="center">
          <div className="button-container">
            <button
              className="option-button"
              onClick={() => setSelectedOption("organization")}
            >
              View Organization Requests List
            </button>
            <button
              className="option-button"
              onClick={() => setSelectedOption("donors")}
            >
              View Donors Requests List
            </button>
            <button
              className="option-button"
              onClick={() => setSelectedOption("registered_organizations")}
            >
              View Registered Organizations
            </button>
          </div>
        </div>
        {/* Conditionally render options box */}
        {showOptionsBox && selectedOption === "donors" && (
          <div className="options-box">
            <button className="close-button" onClick={toggleOptionsBox}>
              X
            </button>
            <select
              className={darkTheme ? "dark-dropdown" : "my-dropdown"}
              onChange={handleSecondDropdownChange}
            >
              <option value="">Select a donor</option>
              {secondDropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Display organization requests pop-up box */}
        {orgRequestsVisible && selectedOption === "organization" && (
          <div className="organization-requests-box">
            <button className="close-button" onClick={toggleOrgRequestsBox}>
              X
            </button>
            <div className="requests-list">
              {organizations.map((org, index) => (
                <div key={index} className="request-box">
                  <h3>{org}</h3>
                  <div className="action-buttons">
                    <button onClick={() => handleActionClick("accept")}>Accept</button>
                    <button onClick={() => handleActionClick("reject")}>Reject</button>
                    <button onClick={() => handleActionClick("details")}>View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <button onClick={toggleTheme} className="theme-button">
        {darkTheme ? "Light Theme" : "Dark Theme"}
      </button>

      {/* Name change box */}
      {nameChangeVisible && (
        <div className="name-change-box">
          <input type="text" value={newName} onChange={handleNameChange} />
          <button onClick={confirmNameChange}>Confirm</button>
          <button className="cancel-button" onClick={cancelNameChange}>
            Cancel
          </button>
        </div>
      )}

      {/* Password change box */}
      {passwordChangeVisible && (
        <div className="password-change-box">
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
          <br />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <br />
          <button className="confirm-button" onClick={confirmPasswordChange}>
            Confirm
          </button>
          <button className="cancel-button" onClick={cancelPasswordChange}>
            Cancel
          </button>
        </div>
      )}

      {/* Admin's HomePage box */}
      <div className="home-page-text-container">
        <p style={{ backgroundColor: "#FBA2D7", textAlign: "center" }}>
          {homePageText}
        </p>
      </div>
    </div>
  );
}

export default ViewOrganizations;
