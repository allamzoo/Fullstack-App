import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faUsers, faAddressBook, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar({ isOpen, onClose, onSelectView }) {
  const handleSelectView = (view) => {
    onSelectView(view); // Call onSelectView with the appropriate view name
    onClose(); // Close sidebar after selection
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <ul>
        <li onClick={() => handleSelectView('fulfilled-donations')}>
          <FontAwesomeIcon icon={faHandHoldingHeart} /> Fulfilled Donations
        </li>
        <li onClick={() => handleSelectView('donor-details')}>
          <FontAwesomeIcon icon={faUsers} /> Donor Details
        </li>
        <li onClick={() => handleSelectView('donor-contact-details')}>
          <FontAwesomeIcon icon={faAddressBook} /> Donor Contact Details
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
