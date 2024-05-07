import React, { useState } from 'react';
import DonationPost from './view posts';
import DonorDetailsBook from './view donor details';
import DonorContactDetailsBook from './view donor contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWandMagicSparkles, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './DonationViewOptions.css';
import logo from './WhatsApp Image 2024-04-28 at 12.14.31 AM.jpeg';

const DonationViewOptions = () => {
  const [currentView, setCurrentView] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const resetView = () => {
    setCurrentView(null);
  };

  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={`main-container ${themeClass}`}>
      <Header
        currentView={currentView}
        toggleTheme={toggleTheme}
        resetView={resetView}
      />

      {currentView === null ? (
        <ViewOptions setCurrentView={setCurrentView} />
      ) : (
        <ContentArea
          currentView={currentView}
          isDarkTheme={isDarkTheme}
        />
      )}
    </div>
  );
};

const Header = ({ currentView, toggleTheme, resetView, isDarkTheme }) => {
  return (
    <div className="top-bar">
      <img src={logo} className="logo" alt="Organization Logo" style={{ width: '600px', height: '120px' }} />

      <div className="top-bar-buttons">
        {currentView && (
          <button className="return-button" onClick={resetView}>
            <FontAwesomeIcon icon={faArrowLeft} /> Return to Options
          </button>
        )}

        {/* Custom theme switch */}
        <button className="home-button" onClick={resetView}>
          <FontAwesomeIcon icon={faHome} /> Home
        </button>
        <label className="theme-switch" htmlFor="theme-switch">
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDarkTheme}
            onChange={toggleTheme} // Toggle theme on change
          />
          <span className="slider round"></span> {/* Custom slider for theme switch */}
        </label>

        
      </div>
    </div>
  );
};


const ViewOptions = ({ setCurrentView }) => {
  return (
    <div className="view-buttons">
      <button onClick={() => setCurrentView('DonationPost')}>
        View Fulfilled Donations
      </button>
      <button onClick={() => setCurrentView('donorContactDetailsBook')}>
        View Donor Contact Book
      </button>
      <button onClick={() => setCurrentView('donorDetailsBook')}>
        View Donor Details Book
      </button>
    </div>
  );
};

const ContentArea = ({ currentView, isDarkTheme }) => {
  return (
    <div className="content-area">
      {currentView === 'DonationPost' && (
        <DonationPost
          contactDetails={[
            { Donation_ID: '134', Donor_name: 'John', Date_of_Donation: '5/3/2024', Type_of_Donation: 'Food' },
            { Donation_ID: '156', Donor_name: 'Jane', Date_of_Donation: '5/5/2024', Type_of_Donation: 'Clothes' },
          ]}
          theme={isDarkTheme ? 'dark' : 'light'}
        />
      )}
      {currentView === 'donorContactDetailsBook' && (
        <DonorContactDetailsBook
          contactDetails={[
            { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
            { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
          ]}
          theme={isDarkTheme ? 'dark' : 'light'}
        />
      )}
      {currentView === 'donorDetailsBook' && (
        <DonorDetailsBook
          details={[
            { name: 'John Doe', address: '123 Main St', profession: 'Doctor' },
            { name: 'Jane Smith', address: '456 Oak St', profession: 'Teacher' },
          ]}
          theme={isDarkTheme ? 'dark' : 'light'}
        />
      )}
    </div>
  );
};

export default DonationViewOptions;
