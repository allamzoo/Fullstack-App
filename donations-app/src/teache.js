import React, { useState } from 'react';
import logo from './logo.png'; // Import your logo image
import './HomeScreen.css'; // Import the CSS file for styles

function TeachingPostsPage() {
  // Sample teaching posts data
  const [teachingPosts, setTeachingPosts] = useState([
    {
      id: 1,
      subject: 'Mathematics',
      area: 'Heliopolis',
      governorate: 'Cairo',
      numberOfStudents: 30,
      address: '123 Madina street',
      mapMarker: 'Coordinates: (XX.XXXXXX, YY.YYYYYY)',
      fulfilled: false, // Add fulfilled property
    },
    {
      id: 2,
      subject: 'Science',
      area: 'Haram',
      governorate: 'Giza',
      numberOfStudents: 25,
      address: '456 Haram street',
      mapMarker: 'Coordinates: (AA.AAAAAA, BB.BBBBBB)',
      fulfilled: false, // Add fulfilled property
    },
    // Add more sample teaching posts as needed
  ]);

  // State for selected post and modal visibility
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [fulfilledPosts, setFulfilledPosts] = useState([]); // State for tracking fulfilled posts
  const [showRightSign, setShowRightSign] = useState(false); // State for showing the right sign
  const [showFulfillPopup, setShowFulfillPopup] = useState(false); // State for showing the fulfillment popup

  // State for filter options
  const [filterOptions, setFilterOptions] = useState({
    subject: '',
    area: '',
    governorate: '',
  });

  // State for dark theme
  const [darkTheme, setDarkTheme] = useState(false);

  // Function to handle viewing details of a teaching post
  const handleViewDetails = (post) => {
    setSelectedPost(post);
    setModalVisible(true);
  };

  // Function to handle fulfilling the case
  const handleFulfillCase = (post) => {
    if (!post.fulfilled) {
      // If the post is not fulfilled, mark it as fulfilled
      setTeachingPosts(
        teachingPosts.map((item) =>
          item.id === post.id ? { ...item, fulfilled: true } : item
        )
      );
      setFulfilledPosts([...fulfilledPosts, post.id]); // Add the fulfilled post to the list
      setShowRightSign(post.id); // Show the right sign for this specific post
      setShowFulfillPopup(true); // Show the fulfillment popup
      setTimeout(() => {
        setShowFulfillPopup(false); // Hide the fulfillment popup after 3 seconds
      }, 3000);
      setTimeout(() => {
        setShowRightSign(false); // Hide the right sign after 2 seconds
      }, 2000);
    } else {
      // If the post is already fulfilled, mark it as unfulfilled
      setTeachingPosts(
        teachingPosts.map((item) =>
          item.id === post.id ? { ...item, fulfilled: false } : item
        )
      );
      setFulfilledPosts(fulfilledPosts.filter((f) => f !== post.id)); // Remove the fulfilled post from the list
    }
  };

  // Function to handle filtering teaching posts
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions({
      ...filterOptions,
      [name]: value,
    });
  };

  // Function to apply filters to teaching posts
  const applyFilters = (post) => {
    return (
      (filterOptions.subject === '' || post.subject === filterOptions.subject) &&
      (filterOptions.area === '' || post.area === filterOptions.area) &&
      (filterOptions.governorate === '' || post.governorate === filterOptions.governorate)
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
      <h1>View Teaching Posts</h1>
        <h2>Filter Options</h2>
        <div className="filter-options">
          <div className="filter-option">
            <div>
              <label htmlFor="subject">Subject:</label>
            </div>
            <div>
              <select id="subject" name="subject" value={filterOptions.subject} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
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
      {/* Display teaching posts */}
      <div className="teaching-posts">
        {teachingPosts.filter(applyFilters).map((post) => (
          <div key={post.id} className="requested-items">
            <li className="teaching-post">
              <h2>{post.subject}</h2>
              <p>Area: {post.area}</p>
              <p>Governorate: {post.governorate}</p>
              <p>Number of Students: {post.numberOfStudents}</p>
              {/* Change the emoji to an eye for selection */}
              <span className={`popup-trigger ${darkTheme ? 'black-emoji' : ''}`} role="img" aria-label="Select Post" onClick={() => handleViewDetails(post)}>👁️</span>
              <button className="fulfill-button" onClick={() => handleFulfillCase(post)}>
                {post.fulfilled ? 'Unfulfill this case' : 'Fulfill this case'} 
              </button>
            </li>
          </div>
        ))}
      </div>
      {/* Modal for displaying post details */}
      {modalVisible && selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
            <h2>Teaching Post Details</h2>
            <p>Subject: {selectedPost.subject}</p>
            <p>Area: {selectedPost.area}</p>
            <p>Governorate: {selectedPost.governorate}</p>
            <p>Number of Students: {selectedPost.numberOfStudents}</p>
            <p>Address: {selectedPost.address}</p>
            <p>Map Marker: {selectedPost.mapMarker}</p>
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

export default TeachingPostsPage;
