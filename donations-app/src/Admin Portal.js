import React, { useState } from "react";
import './Admin Portalc.css';
import logo from './logo.png';

function ViewOrganizations() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState(null);
    const [organizations, setOrganizations] = useState(["Organization 1", "Organization 2"]);
    const [donors, setDonors] = useState([
        { name: "Donor 1", age: 30, gender: "Male", job: "Engineer" },
        { name: "Donor 2", age: 35, gender: "Female", job: "Teacher" }
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

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setDetails(null);
        setMessage("");
        setSelectedItem(null);
        if (event.target.value === "organization" || event.target.value === "donors") {
            setSecondDropdownVisible(true);
            if (event.target.value === "organization") {
                setSecondDropdownOptions(organizations);
            } else {
                setSecondDropdownOptions(donors.map(donor => donor.name));
            }
            setActionButtonsVisible(false);
        } else {
            setSecondDropdownVisible(false);
            setActionButtonsVisible(false);
        }
    };

    const handleSecondDropdownChange = (event) => {
        setSelectedItem(event.target.value);
        setActionButtonsVisible(true);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleActionClick = (action) => {
        setDetails(null);
        setMessage("");
        
        switch (action) {
            case "accept":
                if (selectedOption === "organization") {
                    setOrganizations(organizations.filter(org => org !== selectedItem));
                    setSecondDropdownOptions(organizations.filter(org => org !== selectedItem));
                } else if (selectedOption === "donors") {
                    setDonors(donors.filter(donor => donor.name !== selectedItem));
                    setSecondDropdownOptions(donors.filter(donor => donor.name !== selectedItem).map(donor => donor.name));
                }
                window.alert(`Accepted "${selectedItem}" successfully.`);
                break;
            case "reject":
                if (selectedOption === "organization") {
                    setOrganizations(organizations.filter(org => org !== selectedItem));
                    setSecondDropdownOptions(organizations.filter(org => org !== selectedItem));
                } else if (selectedOption === "donors") {
                    setDonors(donors.filter(donor => donor.name !== selectedItem));
                    setSecondDropdownOptions(donors.filter(donor => donor.name !== selectedItem).map(donor => donor.name));
                }
                window.alert(`Rejected "${selectedItem}" successfully.`);
                break;
            case "details":
                if (selectedOption === "organization") {
                    const orgDetails = organizations.find(org => org === selectedItem);
                    setDetails({
                        name: orgDetails,
                        location: "Organization Location",
                        hotline: "Organization Hotline"
                    });
                } else if (selectedOption === "donors") {
                    if (selectedItem) {
                        const donorDetails = donors.find(donor => donor.name === selectedItem);
                        setDetails({
                            name: donorDetails.name,
                            age: donorDetails.age,
                            gender: donorDetails.gender,
                            job: donorDetails.job
                        });
                    }
                }
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

    return (
        <div className={darkTheme ? "dark-container" : "container"}>
            <div className="profile-view-settings">
                <div className="dropdown">
                    <button onClick={toggleDropdown} className="profile-view-button">
                        <img src={logo} alt="Logo" className="logo" />
                    </button>
                    {dropdownVisible && (
                        <div className="top-right-buttons">
                            <button className="box-button" onClick={openNameChangeBox}>Change name</button>
                            <button className="box-button" onClick={openPasswordChangeBox}>Change Password</button>
                            <button className="box-button">Sign out</button>
                        </div>
                    )}
                </div>
                <select className={darkTheme ? "dark-dropdown" : "my-dropdown"} onChange={handleOptionChange}>
                    <option value="">Select an option</option>
                    <option value="organization">View Organization List</option>
                    <option value="donors">View Donors List</option>
                </select>
                {secondDropdownVisible && (
                    <select className={darkTheme ? "dark-dropdown" : "my-dropdown"} onChange={handleSecondDropdownChange}>
                        <option value="">Select an {selectedOption === "organization" ? "organization" : "donor"}</option>
                        {secondDropdownOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                )}
                {actionButtonsVisible && selectedOption && (
                    <div className="action-buttons">
                        <button onClick={() => handleActionClick("accept")} className="action-button">{darkTheme ? "Accept" : "Accept"}</button>
                        <button onClick={() => handleActionClick("reject")} className="action-button">{darkTheme ? "Reject" : "Reject"}</button>
                        {selectedOption === "organization" || selectedOption === "donors" ? (
                            <button onClick={() => handleActionClick("details")} className="action-button">{darkTheme ? "View Details" : "View Details"}</button>
                        ) : null}
                    </div>
                )}
                {details && (
                    <div className="details">
                        <p>Name: {details.name}</p>
                        {selectedOption === "organization" && (
                            <React.Fragment>
                                <p>Location: {details.location}</p>
                                <p>Hotline: {details.hotline}</p>
                            </React.Fragment>
                        )}
                        {selectedOption === "donors" && (
                            <React.Fragment>
                                <p>Age: {details.age}</p>
                                <p>Gender: {details.gender}</p>
                                <p>Job: {details.job}</p>
                            </React.Fragment>
                        )}
                    </div>
                )}
            </div>
            <button onClick={toggleTheme} className="theme-button">{darkTheme ? "Light Theme" : "Dark Theme"}</button>
            
            {/* Name change box */}
            {nameChangeVisible && (
                <div className="name-change-box">
                    <input type="text" value={newName} onChange={handleNameChange} />
                    <button onClick={confirmNameChange}>Confirm</button>
                    <button onClick={cancelNameChange}>Cancel</button>
                </div>
            )}

            {/* Password change box */}
            {passwordChangeVisible && (
                <div className="name-change-box">
                    <input type="password" placeholder="Old Password" value={oldPassword} onChange={handleOldPasswordChange} />
                    <input type="password" placeholder="New Password" value={newPassword} onChange={handleNewPasswordChange} />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    <button onClick={confirmPasswordChange}>Confirm</button>
                    <button onClick={cancelPasswordChange}>Cancel</button>
                </div>
            )}

            {/* Admin's HomePage box */}
            <div className="home-page-text-container">
                <p style={{ backgroundColor: "#FBA2D7", textAlign: "center" }}>{homePageText}</p>
            </div>
        </div>
    );
}

export default ViewOrganizations;
