import React, { useState, useMemo } from "react";
import "./Admin Portalc.css";
import logo from "./logo.png";
import logo2 from "./logo2.jpg"; // Importing the new logo

// Define the details object outside the component
const details = {
  Resala: {
    name: "Resala",
    foundationDate: "June 25, 1999",
    hotline: "19450",
    type: "Clothes Charity",
    location: "Location1"
  },
  Baheya: {
    name: "Baheya",
    foundationDate: "December 5, 2000",
    hotline: "16602",
    type: "Hospital",
    location: "Location2"
  },
  "57357": {
    name: "57357",
    foundationDate: "July 17, 2007",
    hotline: "19057",
    type: "Hospital",
    location: "Location3"
  },
  "Red Crest": {
    name: "Red Crest",
    foundationDate: "May 5, 1919",
    hotline: "11371",
    type: "Hospital",
    location: "Location4"
  },
  Orman: {
    name: "Orman",
    foundationDate: "January 14, 1993",
    hotline: "0233831185",
    type: "Charity",
    location: "Location5"
  },
  "Misr El Kheir": {
    name: "Misr El Kheir",
    foundationDate: "May 20, 2007",
    hotline: "16140",
    type: "Charity",
    location: "Location6"
  },
  "Food Bank": {
    name: "Food Bank",
    foundationDate: "November 21, 2006",
    hotline: "16060",
    type: "Food Charity",
    location: "Location7"
  },
  "Magdy Yaqoub": {
    name: "Magdy Yaqoub",
    foundationDate: "April 30, 2008",
    hotline: "19731",
    type: "Hospital",
    location: "Location8"
  }
};
const donorRequests = [
  { name: "Seif El Sheikh", age: 20, bloodType: "O", location: "Loc1", job: "Engineer" },
  { name: "Marwan Allam", age: 21, bloodType: "A", location: "Loc2", job: "Engineer" },
  { name: "Ahmed ElTabbakh", age: 20, bloodType: "B", location: "Loc3", job: "Engineer" },
  { name: "Mohamed Wassef", age: 21, bloodType: "A", location: "Loc4", job: "Teacher" },
  { name: "Omar ElHossary", age: 21, bloodType: "O", location: "Loc5", job: "Doctor" },
  { name: "Omar Bakr", age: 21, bloodType: "B", location: "Loc6", job: "Doctor" }
];

function CharityDetails({ organization }) {
  return (
    <div className="details-page">
      <h3>{details[organization].name}</h3>
      <p><strong>Foundation Date:</strong> {details[organization].foundationDate}</p>
      <p><strong>Hotline:</strong> {details[organization].hotline}</p>
      <p><strong>Type:</strong> {details[organization].type}</p>
      <p><strong>Location:</strong> {details[organization].location}</p>
    </div>
  );
}

function DonorDetails({ donor }) {
  return (
    <div className="details-page">
      <h3>{donor.name}</h3>
      <p><strong>Age:</strong> {donor.age}</p>
      <p><strong>Blood Type:</strong> {donor.bloodType}</p>
      <p><strong>Location:</strong> {donor.location}</p>
      <p><strong>Job:</strong> {donor.job}</p>
    </div>
  );
}

function ViewOrganizations() {
  const [donorRequests, setDonorRequests] = useState([
    { name: "Seif El Sheikh", age: 20, bloodType: "O", location: "Loc1", job: "Engineer" },
    { name: "Marwan Allam", age: 21, bloodType: "A", location: "Loc2", job: "Engineer" },
    { name: "Ahmed ElTabbakh", age: 20, bloodType: "B", location: "Loc3", job: "Engineer" },
    { name: "Mohamed Wassef", age: 21, bloodType: "A", location: "Loc4", job: "Teacher" },
    { name: "Omar ElHossary", age: 21, bloodType: "O", location: "Loc5", job: "Doctor" },
    { name: "Omar Bakr", age: 21, bloodType: "B", location: "Loc6", job: "Doctor" }
  ]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [passwordChangeVisible, setPasswordChangeVisible] = useState(false); // State variable for password change box visibility
  const [organizationRequestsVisible, setOrganizationRequestsVisible] = useState(false); // State variable for organization requests box visibility
  const [oldPassword, setOldPassword] = useState(""); // State variable to store the old password
  const [newPassword, setNewPassword] = useState(""); // State variable to store the new password
  const [confirmPassword, setConfirmPassword] = useState(""); // State variable to store the confirmed password
  const [selectedOrganization, setSelectedOrganization] = useState(null); // State variable for the selected organization
  const [organizations, setOrganizations] = useState([
    "Resala",
    "Baheya",
    "57357",
    "Red Crest",
    "Orman",
    "Misr El Kheir",
    "Food Bank",
    "Magdy Yaqoub"
  ]);
  const [page, setPage] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [sortAttribute, setSortAttribute] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [selectedDonor, setSelectedDonor] = useState(null); // State variable for the selected donor
  const [donorPage, setDonorPage] = useState(0); // State variable for current donor page

  
  const pageSize = 5;

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const openPasswordChangeBox = () => {
    setPasswordChangeVisible(true);
  };

  const closePasswordChangeBox = () => {
    setPasswordChangeVisible(false);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const confirmPasswordChange = () => {
    if (newPassword !== confirmPassword) {
      window.alert("New password and confirm password do not match.");
      return;
    }
    window.alert("Password changed successfully.");
    closePasswordChangeBox();
  };
    
  const cancelPasswordChange = () => {
    closePasswordChangeBox();
  };
  const acceptOrganization = () => {
    if (selectedOrganization) {
      setOrganizations((prevOrgs) =>
        prevOrgs.filter((org) => org !== selectedOrganization)
      );
      window.alert(`${selectedOrganization} is accepted successfully.`);
      setSelectedOrganization(null);
    }
  };

  const rejectOrganization = () => {
    if (selectedOrganization) {
      setOrganizations((prevOrgs) =>
        prevOrgs.filter((org) => org !== selectedOrganization)
      );
      window.alert(`${selectedOrganization} is rejected successfully.`);
      setSelectedOrganization(null);
    }
  };
  const openOrganizationRequestsBox = () => {
    setOrganizationRequestsVisible(true);
  };

  const closeOrganizationRequestsBox = () => {
    setOrganizationRequestsVisible(false);
  };

  const nextPage = () => {
    setPage(Math.min(page + 1, Math.ceil(organizations.length / pageSize) - 1));
  };

  const prevPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  const handleOrganizationSelection = (organization) => {
    setSelectedOrganization((prevSelected) =>
      prevSelected === organization ? null : organization
    );
  };

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSortChange = (e) => {
    setSortAttribute(e.target.value);
  };

  const handleFilterChange = (e) => {
    const filterType = e.target.value;
    let filteredOrganizations = [];
  
    switch (filterType) {
      case "Clothes Charity":
        filteredOrganizations = ["Resala"];
        break;
      case "Hospital":
        filteredOrganizations = ["Magdy Yaqoub", "Red Crest", "57357", "Baheya"];
        break;
      case "Charity":
        filteredOrganizations = ["Misr El Kheir", "Orman"];
        break;
      case "Food Charity":
        filteredOrganizations = ["Food Bank"];
        break;
      default:
        filteredOrganizations =  ["Resala","Magdy Yaqoub", "Red Crest", "57357", "Baheya","Misr El Kheir", "Orman","Food Bank"];
        break;
    }
  
    setOrganizations(filteredOrganizations);
  };
  const [donorRequestsVisible, setDonorRequestsVisible] = useState(false);
  const acceptDonor = () => {
    if (selectedDonor) {
      setDonorRequests((prevRequests) =>
        prevRequests.filter((donor) => donor !== selectedDonor)
      ); // Remove accepted donor from donorRequests
      window.alert(`${selectedDonor.name} has been accepted.`);
      setSelectedDonor(null);
    } else {
      window.alert("Please select a donor to accept.");
    }
  };

  const rejectDonor = () => {
    if (selectedDonor) {
      setDonorRequests((prevRequests) =>
        prevRequests.filter((donor) => donor !== selectedDonor)
      ); // Remove rejected donor from donorRequests
      window.alert(`${selectedDonor.name} has been rejected.`);
      setSelectedDonor(null);
    } else {
      window.alert("Please select a donor to reject.");
    }
  };
  const openDonorRequestsBox = () => {
    setDonorRequestsVisible(true);
  };

  const closeDonorRequestsBox = () => {
    setDonorRequestsVisible(false);
  };

  const nextDonorPage = () => {
    setDonorPage(Math.min(donorPage + 1, Math.ceil(donorRequests.length / pageSize) - 1));
  };

  const prevDonorPage = () => {
    setDonorPage(Math.max(donorPage - 1, 0));
  };
  const filteredAndSortedOrganizations = useMemo(() => {
    let filteredOrgs = organizations;

    // Filter organizations based on selected filterType
    if (filterType) {
      filteredOrgs = filteredOrgs.filter(org => details[org].type === filterType);
    }

    // Sort organizations based on selected sortAttribute
    if (sortAttribute) {
      filteredOrgs.sort((a, b) => {
        if (details[a][sortAttribute] < details[b][sortAttribute]) return -1;
        if (details[a][sortAttribute] > details[b][sortAttribute]) return 1;
        return 0;
      });
    }

    return filteredOrgs;
  }, [organizations, sortAttribute, filterType]);

  return (
    <div className={darkTheme ? "dark-container" : "container"}>
      <div className="top-bar">
        <div className="logo-container">
          <img src={logo2} alt="Logo" className="logo2" />
        </div>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="profile-view-button">
            <img src={logo} alt="Logo" className="logo" />
          </button>
          {dropdownVisible && (
            <div className="top-right-buttons">
              <button className="box-button" onClick={openPasswordChangeBox}>
                Change Password
              </button>
              <button className="box-button">Sign out</button>
            </div>
          )}
        </div>
      </div>
      <div className="center">
        <div className="button-container">
          <button className="option-button" onClick={openOrganizationRequestsBox}>
            View Organization Requests List
          </button>
          <button className="option-button" onClick={openDonorRequestsBox}>
            View Donors Requests List
          </button>
          <button className="option-button">View Registered Organizations</button>
        </div>
      </div>
      <button onClick={toggleTheme} className="theme-button">
        {darkTheme ? "Light Theme" : "Dark Theme"}
      </button>

      {donorRequestsVisible && (
  <div className="donor-requests-box">
    <button className="close-button" onClick={closeDonorRequestsBox}>
      X
    </button>
    <ul className="donor-list">
      {donorRequests
        .slice(donorPage * pageSize, (donorPage + 1) * pageSize)
        .map((donor, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={selectedDonor === donor}
                onChange={() => setSelectedDonor(donor)}
              />
              {donor.name}
            </label>
          </li>
        ))}
    </ul>
    <div className="pagination">
      <button onClick={prevDonorPage}>Previous Page</button>
      <span className="page-count">
        {donorPage + 1}/{Math.ceil(donorRequests.length / pageSize)}
      </span>
      <button onClick={nextDonorPage}>Next Page</button>
    </div>
    <div className="action-buttons">
      <button className="action-button" onClick={acceptDonor}>
        Accept
      </button>
      <button className="action-button" onClick={rejectDonor}>
        Reject
      </button>
      <button className="action-button" onClick={toggleShowDetails}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>
    </div>
    {/* Move DonorDetails component here */}
    {showDetails && selectedDonor && <DonorDetails donor={selectedDonor} />}
  </div>
)}

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

      {organizationRequestsVisible && (
        <div className="organization-requests-box">
          <button className="close-button" onClick={closeOrganizationRequestsBox}>
            X
          </button>
          <div>
            <div className="sort-options">
              <span>Sort by:</span>
              <select onChange={handleSortChange}>
                <option value="">--Select--</option>
                <option value="name">Name</option>
                <option value="foundationDate">Foundation Date</option>
                <option value="type">Type</option>
                <option value="location">Location</option>
              </select>
            </div>
            <div className="filter-options">
              <span>Filter by Type:</span>
              <select onChange={handleFilterChange}>
                <option value="">--Select--</option>
                <option value="Clothes Charity">Clothes Charity</option>
                <option value="Hospital">Hospital</option>
                <option value="Charity">Charity</option>
                <option value="Food Charity">Food Charity</option>
              </select>
            </div>
          </div>
          <ul className="organization-list">
            {organizations.slice(page * pageSize, (page + 1) * pageSize).map((org, index) => (
              <li key={index} onClick={() => handleOrganizationSelection(org)}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOrganization === org}
                    readOnly
                  />
                  {org}
                </label>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <button onClick={prevPage}>Previous Page</button>
            <span className="page-count">{page + 1}/{Math.ceil(organizations.length / pageSize)}</span>
            <button onClick={nextPage}>Next Page</button>
          </div>

          <div className="action-buttons">
            <button className="action-button" onClick={acceptOrganization}>
              Accept
            </button>
            <button className="action-button" onClick={rejectOrganization}>
              Reject
            </button>
            <button className="action-button" onClick={toggleShowDetails}>
              {showDetails ? "Hide Details" : "View Details"}
            </button>
          </div>

          {showDetails && selectedOrganization && (
            <CharityDetails
              organization={selectedOrganization}
              onClose={() => setShowDetails(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ViewOrganizations;
