import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faUser,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import './DropDownMenu.css'; // Styles for drop-down menu

function DropDownMenu({ onSelectView, onClose }) {
  return (
    <div className="drop-down-menu">
      <ul>
        <li onClick={() => { onSelectView('fulfilled-donations'); onClose(); }}>
          <FontAwesomeIcon icon={faBox} /> Fulfilled Donation Post
        </li>
        <li onClick={() => { onSelectView('donor-details'); onClose(); }}>
          <FontAwesomeIcon icon={faUser} /> Donor Details
        </li>
        <li onClick={() => { onSelectView('donor-contact-details'); onClose(); }}>
          <FontAwesomeIcon icon={faPhone} /> Donor Contact Details
        </li>
      </ul>
    </div>
  );
}

export default DropDownMenu;
