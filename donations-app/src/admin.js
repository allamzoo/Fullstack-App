import React, { useState, useEffect } from 'react';
import './admin.css'; // Importing App.css for styling
import logo from './logo.png'; // Importing the logo image
import { FaHome, FaLock, FaSignOutAlt, FaAngleDown } from 'react-icons/fa'; // Importing icons from react-icons
import OrganizationDetails from './OrganizationDetails'; // Importing the OrganizationDetails component
import { FaDownload, FaCheck, FaTimes, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
function Homepage() {
    const [showRegisteredDonors, setShowRegisteredDonors] = useState(false);
const [filterByDonors, setFilterByDonors] = useState(null);
const [sortByDonors, setSortByDonors] = useState(null);
const [searchQueryDonors, setSearchQueryDonors] = useState('');
const toggleRegisteredDonors = () => {
    setShowRegisteredDonors(prevState => !prevState);
    if (showDonorRequests){
        setShowDonorRequests(false);
    }
    if (showOrganizationRequests){
        setShowOrganizationRequests(false);
    }
    if(showRegisteredOrganizations){
        setShowRegisteredOrganizations(false);
    }
};

const handleFilterChangeDonors = (filter) => {
    setFilterByDonors(filter);
};

const handleSortChangeDonors = (sort) => {
    setSortByDonors(sort);
};

const handleSearchQueryChangeDonors = (e) => {
    setSearchQueryDonors(e.target.value);
};
const renderRegisteredDonors = () => {
    let filteredDonors = [...registeredDonors];

    // Apply custom sorting
    if (sortBy) {
        filteredDonors.sort((a, b) => {
            switch (sortBy) {
                case "Name":
                    return a.name.localeCompare(b.name);
                case "Blood Type":
                    return a.bloodType.localeCompare(b.bloodType);
                case "Location":
                    return a.location.localeCompare(b.location);
                case "Job":
                    return a.job.localeCompare(b.job);
                case "Age":
                    return a.age - b.age;
                default:
                    return a.name.localeCompare(b.name);
            }
        });
    }

    // Filter out deleted donors
    filteredDonors = filteredDonors.filter(donor => !deletedDonors.includes(donor));

    // Filter donors based on search query
    let filteredDonorsSearch = filteredDonors.filter(donor =>
        donor.name.toLowerCase().includes(searchQueryDonors.toLowerCase())
    );

    // Apply filter if selectedFilter and filterBy are provided
    if (selectedJobFilter || selectedBloodTypeFilter) {
        filteredDonorsSearch = filteredDonorsSearch.filter(donor => {
          if (selectedJobFilter && selectedBloodTypeFilter) {
            return donor.job === selectedJobFilter && donor.bloodType === selectedBloodTypeFilter;
          } else if (selectedJobFilter) {
            return donor.job === selectedJobFilter;
          } else if (selectedBloodTypeFilter) {
            return donor.bloodType === selectedBloodTypeFilter;
          } else {
            return true; // No filter applied
          }
        });
      }
      

    // Track rendered donor names
    const renderedDonorNames = new Set();

    // Map the filtered and sorted donors to JSX elements
    return filteredDonorsSearch.map((donor, index) => {
        // Check if donor name has already been rendered
        if (renderedDonorNames.has(donor.name)) {
            return null; // Don't render duplicate buttons
        }

        // Add donor name to rendered set
        renderedDonorNames.add(donor.name);

        const isDonorOpened = openedDonors.includes(donor.name);
        return (
            <li key={index}>
                <button className="nav-item-button" onClick={() => handleDonorClick(donor.name)}>
                    <FaAngleDown className="arrow-icon"/>
                    {donor.name}
                </button>
                {isDonorOpened && (
                    <div>
                        <p>Age: {donor.age}</p>
                        <p>Blood Type: {donor.bloodType}</p>
                        <p>Location: {donor.location}</p>
                        <p>Job: {donor.job}</p>
                        <p>Number: {donor.number}</p>
                        <p>
                            Documents:
                            <a href={donor.documents} download="Dummy.pdf">
                                <FaDownload className="download-icon" /> {donor.documents}
                            </a>
                        </p>
                        <div>
                            <button className="delete-button" onClick={() => handleDeleteDonor(donor)}><FaTimes />Delete User</button>
                        </div>
                    </div>
                )}
            </li>
        );
    });
};




const [deletedDonors, setDeletedDonors] = useState([]);

const handleDeleteDonor = (donor) => {
    alert(`${donor.name} has been deleted successfully.`);
    setDeletedDonors(prevDeletedDonors => [...prevDeletedDonors, donor]);
};





    const handleDelete = (organization) => {
        alert(`${organization.name} has been deleted successfully.`);
        setRejectedUsers([...rejectedUsers, organization]);
        setOpenedOrganizations(openedOrganizations.filter(org => org !== organization.name));
        setFilteredOrganizations(filteredOrganizations.filter(org => org.name !== organization.name));
        setRegisteredOrganizations(prevOrgs => {
            const updatedOrgs = prevOrgs.filter(org => org.name !== organization.name);
            return updatedOrgs;
        });
        setDeletedOrganizations(prevDeletedOrgs => [...prevDeletedOrgs, organization]);
        setShowRegisteredOrganizations(prevState => !prevState);
    };
    const [deletedOrganizations, setDeletedOrganizations] = useState([]);
    const [showRegisteredOrganizations, setShowRegisteredOrganizations] = useState(false);
    const toggleRegisteredOrganizations = () => {
        setShowRegisteredOrganizations(prevState => !prevState);
        if (showDonorRequests){
            setShowDonorRequests(false);
        }
        if (showOrganizationRequests){
            setShowOrganizationRequests(false);
        }
        if(showRegisteredDonors){
            setShowRegisteredDonors(false);
        }
    };
    const closeRegisteredOrganizations = () => {
      setShowRegisteredOrganizations(false);
  };
  const closeDonorOrganizations = () => {
    setShowDonorRequests(false);
  };
  const closeRegisteredDonors = () => {
    setShowRegisteredDonors(false);
  };
  const closeOrganizationRequests = () => {
    setShowOrganizationRequests(false);
  };
    const filterDuplicates = (organizations) => {
        const uniqueOrganizations = organizations.filter((org, index, self) =>
            index === self.findIndex((o) => (
                o.name === org.name
            ))
        );
        return uniqueOrganizations;
    };
    const [filterByRegistered, setFilterByRegistered] = useState(null);
const [sortByRegistered, setSortByRegistered] = useState(null);
const handleFilterChangeRegistered = (filter) => {
    setFilterByRegistered(filter);
};
const handleSortChangeRegistered = (sort) => {
    setSortByRegistered(sort);
};
const [searchQuery, setSearchQuery] = useState('');
const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
};
const filterRegisteredOrganizations = (organizations) => {
    return organizations.filter(org =>
        org.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
};
const renderRegisteredOrganizations = () => {
    let filteredOrgs = Object.values(organizationItems);
    const uniqueOrganizations = filterDuplicates(registeredOrganizations);
    const organizationsToRender = uniqueOrganizations.filter(organization => !deletedOrganizations.includes(organization));
    const filteredOrganizations = filterRegisteredOrganizations(organizationsToRender);
    if (sortBy) {
        organizationsToRender.sort((a, b) => {
            switch (sortBy) {
                case "Name":
                    return registeredOrganizations.sort((a, b) => a.name.localeCompare(b.name));
                case "Foundation Date":
                    return registeredOrganizations.sort((a, b) => new Date(a.foundationDate) - new Date(b.foundationDate));
                case "Type":
                    return registeredOrganizations.sort((a, b) => a.type.localeCompare(b.type));
                case "Address":
                    return registeredOrganizations.sort((a, b) => a.address.localeCompare(b.address));
                case "Area":
                    return registeredOrganizations.sort((a, b) => a.Area.localeCompare(b.Area));
                case "Governorate":
                    return registeredOrganizations.sort((a, b) => a.Governorate.localeCompare(b.Governorate));
                default:
                    return registeredOrganizations;
            }
        });
    }
    let organizationsToDisplay = filteredOrganizations;
    organizationsToDisplay = filteredOrganizations.filter(org => {
        const matchesArea = !selectedAreaFilter || org.Area === selectedAreaFilter;
        const matchesGovernorate = !selectedGovernorateFilter || org.Governorate === selectedGovernorateFilter;
        const matchesType = !selectedTypeFilter || org.type === selectedTypeFilter;
    
        return matchesArea && matchesGovernorate && matchesType;
      });
    return organizationsToDisplay.map((organization, index) => {
        const isOrganizationOpened = openedOrganizations.includes(organization.name);
        return (
            <li key={index}>
                <button className="nav-item-button" onClick={() => handleOrganizationClick(organization.name)}>
                    <FaAngleDown className="arrow-icon" /> {organization.name}
                </button>
                {isOrganizationOpened && (
                    <div>
                        <OrganizationDetails organization={organization} />
                        <button className="delete-button" onClick={() => handleDelete(organization)}>
                            <FaTimes /> Delete Organization
                        </button>
                    </div>
                )}
            </li>
        );
    });
};
    const [showExtraButtons, setShowExtraButtons] = useState(false); // State to manage the visibility of extra buttons
    const [isLightTheme, setIsLightTheme] = useState(true); // State to manage the theme
    const [showOrganizationRequests, setShowOrganizationRequests] = useState(false); // State to manage visibility of organization requests
    const [showDonorRequests, setShowDonorRequests] = useState(false); // State to manage visibility of donor requests
    const [selectedOrganization, setSelectedOrganization] = useState(null); // State to manage the selected organization
    const [openedOrganizations, setOpenedOrganizations] = useState([]); // State to manage opened organizations
    const [openedDonors, setOpenedDonors] = useState([]); 
    const [registeredUsers, setRegisteredUsers] = useState([]); // State to manage registered organizations
    const [registeredOrganizations, setRegisteredOrganizations] = useState([]);
    const [registeredDonors, setRegisteredDonors] = useState([]);
    const [rejectedUsers, setRejectedUsers] = useState([]); // State to manage registered organizations
    const [filterBy, setFilterBy] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const filterOptions = ["Area", "Type", "Governorate"];
    const sortOptions = ["Name", "Foundation Date", "Type", "Address", "Area", "Governorate"];
    const [selectedFilter, setSelectedFilter] = useState(""); 
    const [filteredOrganizations, setFilteredOrganizations] = useState([]); // State to manage registered organizations
    const donorRequests = [
        { name: "Seif El Sheikh", age: 20, bloodType: "O", location: "Loc1", job: "Doctor", number: "01159363232", documents:"Dummy.pdf"},
        { name: "Marwan Allam", age: 21, bloodType: "A", location: "Loc2", job: "Teacher", number: "01288205533", documents:"Dummy.pdf" },
        { name: "Ahmed ElTabbakh", age: 20, bloodType: "B", location: "Loc3", job: "Teacher", number: "01111645577" , documents:"Dummy.pdf"},
        { name: "Mohamed Wassef", age: 21, bloodType: "A", location: "Loc4", job: "Teacher", number: "01206542409" , documents:"Dummy.pdf"},
        { name: "Omar ElHossary", age: 21, bloodType: "O", location: "Loc5", job: "Doctor", number: "01145157085" , documents:"Dummy.pdf"},
        { name: "Omar Bakr", age: 21, bloodType: "B", location: "Loc6", job: "Doctor", number: "01202984600", documents:"Dummy.pdf" }
      ];
      const filterOptionsDonors = ["Job", "Blood Type"];
      const sortOptionsDonors = ["Name", "Blood Type", "Job", "Location", "Age"];
      const renderFilterOptionsDonors = () => {
        return (
          <div className="filter-options">
            {filterBy === "Blood Type" && (
              <select value={selectedBloodTypeFilter} onChange={handleBloodTypeFilterChange} className="dropdown">
                <option value="O">O</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            )}
             {filterBy === "Job" && (
              <select value={selectedJobFilter} onChange={handleJobFilterChangeDonors} className="dropdown">
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
              </select>
            )}
          </div>
        );
      };      
      const renderFilteredDonorRequests = () => {
        let filteredDonorRequests = [...donorRequests];
        filteredDonorRequests = filteredDonorRequests.filter(donor => !registeredUsers.some(user => user.name === donor.name));
        filteredDonorRequests = filteredDonorRequests.filter(donor => !rejectedUsers.some(user => user.name === donor.name));
        if (selectedJobFilter || selectedBloodTypeFilter) {
            filteredDonorRequests = filteredDonorRequests.filter(donor => {
              if (selectedJobFilter && selectedBloodTypeFilter) {
                return donor.job === selectedJobFilter && donor.bloodType === selectedBloodTypeFilter;
              } else if (selectedJobFilter) {
                return donor.job === selectedJobFilter;
              } else if (selectedBloodTypeFilter) {
                return donor.bloodType === selectedBloodTypeFilter;
              } else {
                return true; // No filter applied
              }
            });
          }
          
if (sortBy) {
    filteredDonorRequests.sort((a, b) => {
        switch (sortBy) {
            case "Name":
                return a.name.localeCompare(b.name);
            case "Job":
                return a.job.localeCompare(b.job);
            case "Location":
                return a.location.localeCompare(b.location);
            case "Blood Type":
                return a.bloodType.localeCompare(b.bloodType);
            case "Age":
                return a.age - b.age;
            default:
                return a.name.localeCompare(b.name);
        }
    });
}
        return filteredDonorRequests.map((donor, index) => (
            <li key={index}>
                <button className="nav-item-button" onClick={() => handleDonorClick(donor.name)}>
                    <FaAngleDown className="arrow-icon"/>
                    {donor.name}
                </button>
                {openedDonors.includes(donor.name) && (
                    <div>
                        <p>Age: {donor.age}</p>
                        <p>Blood Type: {donor.bloodType}</p>
                        <p>Location: {donor.location}</p>
                        <p>Job: {donor.job}</p>
                        <p>Number: {donor.number}</p>
                        <p>
                         Documents: 
                         <a href={donor.documents} download="Dummy.pdf">
                          <FaDownload className="download-icon" /> {donor.documents}
                        </a>
                        </p>
                        <div>
                            <button className="accept-button" onClick={() => handleAccept(donor)}><FaCheck />Accept</button>
                            <button className="reject-button" onClick={() => handleReject(donor)}><FaTimes />Reject</button>
                        </div>
                    </div>
                )}
            </li>
        ));
    };
      const handleDonorClick = (donorName) => {
        if (openedDonors.includes(donorName)) {
          setOpenedDonors(openedDonors.filter(donor => donor !== donorName));
        } else {
          setOpenedDonors([...openedDonors, donorName]);
        }
      };
      const [selectedAreaFilter, setSelectedAreaFilter] = useState("");
const [selectedGovernorateFilter, setSelectedGovernorateFilter] = useState("");
const [selectedTypeFilter, setSelectedTypeFilter] = useState("");

const handleAreaFilterChange = (event) => {
  setSelectedAreaFilter(event.target.value);
};

const handleGovernorateFilterChange = (event) => {
  setSelectedGovernorateFilter(event.target.value);
};

const handleTypeFilterChange = (event) => {
  setSelectedTypeFilter(event.target.value);
};

      const renderFilterOptions = () => {
        return (
          <div className="filter-options">
            {filterBy === "Area" && (
              <select value={selectedAreaFilter} onChange={handleAreaFilterChange} className="dropdown">
                <option value="">Select Area</option>
                <option value="Tagamoa">Tagamoa</option>
                <option value="Sheikh Zayed">Sheikh Zayed</option>
                <option value="El Sayeda Zeinab">El Sayeda Zeinab</option>
                <option value="Tanta">Tanta</option>
                <option value="Tiba City">Tiba City</option>
                <option value="Smouha">Smouha</option>
                <option value="Zamalek">Zamalek</option>
              </select>
            )}
            {filterBy === "Governorate" && (
              <select value={selectedGovernorateFilter} onChange={handleGovernorateFilterChange} className="dropdown">
                <option value="">Select Governorate</option>
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Luxor">Luxor</option>
                <option value="Gharbiya">Gharbiya</option>
                <option value="Alexandria">Alexandria</option>
              </select>
            )}
            {filterBy === "Type" && (
              <select value={selectedTypeFilter} onChange={handleTypeFilterChange} className="dropdown">
                <option value="">Select Type</option>
                <option value="Food Charity">Food Bank</option>
                <option value="Charity">Charity</option>
                <option value="Hospital">Hospital</option>
              </select>
            )}
          </div>
        );
      };
          const handleFilterOptionChange = (e) => {
        setSelectedFilter(e.target.value);
      };
    const sortOrganizations = (organizations, sortBy) => {
        switch (sortBy) {
            case "Name":
                return organizations.sort((a, b) => a.name.localeCompare(b.name));
            case "Foundation Date":
                return organizations.sort((a, b) => new Date(a.foundationDate) - new Date(b.foundationDate));
            case "Type":
                return organizations.sort((a, b) => a.type.localeCompare(b.type));
            case "Address":
                return organizations.sort((a, b) => a.address.localeCompare(b.address));
            case "Area":
                return organizations.sort((a, b) => a.Area.localeCompare(b.Area));
            case "Governorate":
                return organizations.sort((a, b) => a.Governorate.localeCompare(b.Governorate));
            default:
                return organizations;
        }
    };
    const handleFilterChange = (filter) => {
        setFilterBy(filter);
    };
    const handleSortChange = (sort) => {
        setSortBy(sort);
    };
    const renderFilteredOrganizations = () => {
        let filteredOrganizations = Object.values(organizationItems);
        
        filteredOrganizations = filteredOrganizations.filter(organization => 
          !registeredUsers.some(user => user.name === organization.name)
        );
        
        filteredOrganizations = filteredOrganizations.filter(organization => 
          !rejectedUsers.some(user => user.name === organization.name)
        );
        
        if (selectedAreaFilter || selectedGovernorateFilter || selectedTypeFilter) {
          filteredOrganizations = filteredOrganizations.filter(org => {
            if (selectedAreaFilter && selectedGovernorateFilter && selectedTypeFilter) {
              return org.Area === selectedAreaFilter && org.Governorate === selectedGovernorateFilter && org.type === selectedTypeFilter;
            } else if (selectedAreaFilter && selectedGovernorateFilter) {
              return org.Area === selectedAreaFilter && org.Governorate === selectedGovernorateFilter;
            } else if (selectedAreaFilter && selectedTypeFilter) {
              return org.Area === selectedAreaFilter && org.type === selectedTypeFilter;
            } else if (selectedGovernorateFilter && selectedTypeFilter) {
              return org.Governorate === selectedGovernorateFilter && org.type === selectedTypeFilter;
            } else if (selectedAreaFilter) {
              return org.Area === selectedAreaFilter;
            } else if (selectedGovernorateFilter) {
              return org.Governorate === selectedGovernorateFilter;
            } else if (selectedTypeFilter) {
              return org.type === selectedTypeFilter;
            } else {
              return true; // No filter applied
            }
          });
        }
        
        sortOrganizations(filteredOrganizations,sortBy)
      
        return filteredOrganizations.map((organization, index) => (
          <li key={index}>
            <button className="nav-item-button" onClick={() => handleOrganizationClick(organization.name)}>
              <FaAngleDown className="arrow-icon" /> {organization.name}
            </button>
            {openedOrganizations.includes(organization.name) && (
              <div>
                <OrganizationDetails organization={organization} />
                <button className="accept-button" onClick={() => handleAccept(organization)}><FaCheck />Accept</button>
                <button className="reject-button" onClick={() => handleReject(organization)}><FaTimes />Reject</button>
              </div>
            )}
          </li>
        ));
      };
      
    const handleAccept = (organization) => {
        alert(`${organization.name} has been accepted successfully.`);
        setOpenedOrganizations(openedOrganizations.filter(org => org !== organization.name));
        setRegisteredUsers([...registeredUsers, organization]);
        setFilteredOrganizations(filteredOrganizations.filter(org => org.name !== organization.name));
    };
    useEffect(() => {
        registeredUsers.forEach(user => {
            if (user.hasOwnProperty('bloodType')) {
                setRegisteredDonors(prevDonors => [...prevDonors, user]);
            } else {
                setRegisteredOrganizations(prevOrgs => [...prevOrgs, user]);
            }
        });
    }, [registeredUsers]);
    const handleReject = (organization) => {
        alert(`${organization.name} has been rejected successfully.`);
        setRejectedUsers([...rejectedUsers, organization]);
        setOpenedOrganizations(openedOrganizations.filter(org => org !== organization.name));
        setFilteredOrganizations(filteredOrganizations.filter(org => org.name !== organization.name));
    };
    const filterDropdown = (
        <div className="filter-dropdown">
          <select value={selectedGovernorateFilter} onChange={handleGovernorateFilterChange} className="dropdown">
            <option value="">Select Governorate</option>
            <option value="Cairo">Cairo</option>
            <option value="Giza">Giza</option>
            <option value="Luxor">Luxor</option>
            <option value="Gharbiya">Gharbiya</option>
            <option value="Alexandria">Alexandria</option>
          </select>
          <select value={selectedAreaFilter} onChange={handleAreaFilterChange} className="dropdown">
            <option value="">Select Area</option>
            <option value="Tagamoa">Tagamoa</option>
            <option value="Sheikh Zayed">Sheikh Zayed</option>
            <option value="El Sayeda Zeinab">El Sayeda Zeinab</option>
            <option value="Tanta">Tanta</option>
            <option value="Tiba City">Tiba City</option>
            <option value="Smouha">Smouha</option>
            <option value="Zamalek">Zamalek</option>
          </select>
          <select value={selectedTypeFilter} onChange={handleTypeFilterChange} className="dropdown">
            <option value="">Select Type</option>
            <option value="Food Charity">Food Bank</option>
            <option value="Charity">Charity</option>
            <option value="Hospital">Hospital</option>
          </select>
        </div>
      );
      
      
   const sortDropdown = (
        <div className="sort-dropdown">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Sort By</option>
                <option value="Name">Name</option>
                <option value="Foundation Date">Foundation Date</option>
                <option value="Type">Type</option>
                <option value="Address">Address</option>
                <option value="Area">Area</option>
                <option value="Governorate">Governorate</option>
            </select>
        </div>
    );
    // Define state variables and their respective setters
const [selectedJobFilter, setSelectedJobFilter] = useState("");
const [selectedBloodTypeFilter, setSelectedBloodTypeFilter] = useState("");

// Define handlers for changing job and blood type filters
const handleJobFilterChange = (event) => {
  setSelectedJobFilter(event.target.value);
};

const handleBloodTypeFilterChange = (event) => {
  setSelectedBloodTypeFilter(event.target.value);
};
const handleJobFilterChangeDonors = (event) => {
    setSelectedJobFilter(event.target.value);
  };
  
  const filterDropdownDonors = (
    <div className="filter-dropdown">
        <select value={selectedBloodTypeFilter} onChange={handleBloodTypeFilterChange} className="dropdown">
        <option value="">Select Blood Type</option>
        <option value="O">O</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      <select value={selectedJobFilter} onChange={handleJobFilterChangeDonors} className="dropdown">
        <option value="">Select Job</option>
        <option value="Doctor">Doctor</option>
        <option value="Teacher">Teacher</option>
      </select>
    </div>
  );
  
      
      
      
      const sortDropdownDonors = (
        <div className="sort-dropdown">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            {sortOptionsDonors.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    const organizationItems = {
        Resala: {
            name: "Resala",
            foundationDate: "June 25, 1999",
            hotline: "19450",
            type: "Charity",
            location: "google.png",
            address: "Address1",
            Area: "Tagamoa",
            Governorate: "Cairo",
            documents: "Dummy.pdf",
          },
          "Baheya": {
            name: "Baheya",
            foundationDate: "December 5, 2000",
            hotline: "16602",
            type: "Hospital",
            location: "google.png",
            address: "Address2",
            Area: "Sheikh Zayed",
            Governorate: "Giza",
            documents: "Dummy.pdf",
          },
          "57357": {
            name: "57357",
            foundationDate: "July 17, 2007",
            hotline: "19057",
            type: "Hospital",
            location: "google.png",
            address: "Address3",
            Area: "El Sayeda Zeinab",
            Governorate: "Cairo",
            documents: "Dummy.pdf",
          },
          "Red Crest": {
            name: "Red Crest",
            foundationDate: "May 5, 1919",
            hotline: "11371",
            type: "Hospital",
            location: "google.png",
            address: "Address4",
            Area: "Tanta",
            Governorate: "Gharbiya",
            documents: "Dummy.pdf",
          },
          "Orman": {
            name: "Orman",
            foundationDate: "January 14, 1993",
            hotline: "0233831185",
            type: "Charity",
            location: "google.png",
            address: "Address5",
            Area: "Tiba City",
            Governorate: "Luxor",
            documents: "google.png",
          },
          "Misr El Kheir": {
            name: "Misr El Kheir",
            foundationDate: "May 20, 2007",
            hotline: "16140",
            type: "Charity",
            location: "google.png",
            address: "Address6",
            Area: "Smouha",
            Governorate: "Alexandria",
            documents: "Dummy.pdf",
          },
          "Food Bank": {
            name: "Food Bank",
            foundationDate: "November 21, 2006",
            hotline: "16060",
            type: "Food Charity",
            location: "google.png",
            address: "Address7",
            Area: "Sheikh Zayed",
            Governorate: "Giza",
            documents: "Dummy.pdf",
          },
          "Magdy Yaqoub": {
            name: "Magdy Yaqoub",
            foundationDate: "April 30, 2008",
            hotline: "19731",
            type: "Hospital",
            location: "google.png",
            address: "Address8",
            Area: "Zamalek",
            Governorate: "Cairo",
            documents: "Dummy.pdf",
          }
    };
    const toggleExtraButtons = () => {
        setShowExtraButtons(!showExtraButtons);
    };
    const toggleOrganizationRequests = () => {
        setShowOrganizationRequests(prevState => !prevState); // Toggle the visibility state
        if (showDonorRequests) {
            setShowDonorRequests(false); // Close donor requests if open
        }
        if (showRegisteredOrganizations){
            setShowRegisteredOrganizations(false);
        }
    };
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
        document.body.classList.toggle('dark-theme');
    };
    const handleOrganizationClick = (organizationName) => {
        if (openedOrganizations.includes(organizationName)) {
            setOpenedOrganizations(openedOrganizations.filter(org => org !== organizationName)); // Remove organization if already opened
        } else {
            setOpenedOrganizations([...openedOrganizations, organizationName]); // Add organization if not already opened
        }
    };
    const closeOrganizationDetails = () => {
        setSelectedOrganization(null);
    };
    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [changedPassword, setChangedPassword] = useState('');
    const openPasswordChangeBox = () => {
        setShowPasswordChange(true);
    };
    const closePasswordChangeBox = () => {
        setShowPasswordChange(false);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };
    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match');
            return;
        }
        if (newPassword.length < 8 || confirmPassword.length < 8) {
            alert('Password should be at least 8 characters long');
            return;
        }
        if (oldPassword !== changedPassword) {
            alert('Wrong old password');
            return;
        }
        setChangedPassword(newPassword);
        alert('Password changed successfully');
        closePasswordChangeBox();
    };
    return (
        <div className="top-bar">
            <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
            <div className="homepage">
                {/* Homepage content */}
                <label className="theme-switch" htmlFor="theme-switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={!isLightTheme}
            onChange={toggleTheme}
          />
          <div className="slider round"></div>
        </label>
                <button className="logo-button" onClick={toggleExtraButtons}></button> {/* Add the logo button */}
                {showExtraButtons && (
                    <div className="extra-buttons">
                        <button className="extra-button"onClick={openPasswordChangeBox}><FaLock/>Change Password</button>
                        {showPasswordChange && (
                <div className="password-change-overlay">
                    <div className="password-change-box">
                        <button className="cancel-button" onClick={closePasswordChangeBox}>x</button>
                        <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button className="confirm-button" onClick={handleChangePassword}>Confirm</button>
                    </div>
                </div>
            )}
                        <button className="extra-button"><FaSignOutAlt /> Log Out</button>
                    </div>
                )}
            </div>
            {/* Navigation Bar */}
            <div className="navigation-bar">
            <button className="nav-button" onClick={() => {  setShowOrganizationRequests(prevState => !prevState); // Toggle the visibility state
            
        if (showDonorRequests) {
            setShowDonorRequests(false); // Close donor requests if open
        }
        if(showRegisteredOrganizations){
            setShowRegisteredOrganizations(false);
        }
        if(showRegisteredDonors){
            setShowRegisteredDonors(false);
        }; }}><FaAngleDown className="arrow-icon" />View Organization Requests List</button>
                <button className="nav-button1" onClick={() => {   setShowDonorRequests(prevState => !prevState); // Toggle the visibility state
        if (showOrganizationRequests) {
            setShowOrganizationRequests(false); // Close organization requests if open
        } 
        if(showRegisteredOrganizations){
            setShowRegisteredOrganizations(false);
        }
        if(showRegisteredDonors){
            setShowRegisteredDonors(false);
        }}}><FaAngleDown className="arrow-icon" />View Donor Requests List</button>      
                          {showOrganizationRequests && (
                    <div className="nav-scrollable-box">
                        {filterDropdown}
                        {sortDropdown}
                        <ul>
                        {renderFilteredOrganizations()}
                        <button className="nav-item-button" onClick={closeOrganizationRequests}>Close</button>
                        </ul>
                    </div>
                )}
                {showDonorRequests && (
                    <div className="nav-scrollable-box">
                        {filterDropdownDonors}
                        {sortDropdownDonors}
                        <ul>
                        {renderFilteredDonorRequests()}
                        <button className="nav-item-button" onClick={closeDonorOrganizations}>Close</button>
                        </ul>
                    </div>
                )}
                 <button className="nav-button2" onClick={toggleRegisteredOrganizations}><FaAngleDown className="arrow-icon" />View Registered Organizations List</button>
            {showRegisteredOrganizations && (
                
                <div className="nav-scrollable-box">
                        {filterDropdown}
                        {sortDropdown}   
                        <div className="container">
                        <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                    className="search-bar"
                />        
                </div>
                                 <ul>
                        {renderRegisteredOrganizations()}
                        <button className="nav-item-button" onClick={closeRegisteredOrganizations}>Close</button>
                    </ul>
                </div>
            )}
                <button  className="nav-button3" onClick={toggleRegisteredDonors}> <FaAngleDown className="arrow-icon" /> View Registered Donors List</button>
                {showRegisteredDonors && (
    <div className="nav-scrollable-box">
        {filterDropdownDonors}
        {sortDropdownDonors}
        <div className="container">
        <input
            type="text"
            placeholder="Search..."
            value={searchQueryDonors}
            onChange={handleSearchQueryChangeDonors}
            className="search-bar"
        />  
        </div>      
        <ul>
            {renderRegisteredDonors()}
            <button className="nav-item-button" onClick={closeRegisteredDonors}>Close</button>

        </ul>
    </div>
)}

            </div>
        </div>
    );
}

export default Homepage;