// DonationPopup.js

import React, { useState } from 'react';
import './HomeScreen.css';
import TimePickerr from './TimePickerr';
import ETANotificationn from './ETANotificationn';
import PickupConfirmationn from './PickupConfirmationn';
import DriverArrivalNotificationn from './DriverArrivalNotificationn';

const DonationPopup = ({ onClose, availableTimeSlots, transportationOptions }) => {
  const [selectedTransportation, setSelectedTransportation] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showETA, setShowETA] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // State for pickup confirmation
  const [showDriverArrival, setShowDriverArrival] = useState(false); // State for driver arrival notification
  const [eta, setETA] = useState('');

  const handleTransportationChange = (e) => {
    setSelectedTransportation(e.target.value);
  };

  const handleTimeSlotChange = (time) => {
    setSelectedTimeSlot(time);
    // Calculate ETA based on selected time slot
    const calculatedETA = calculateETA(time); // Implement calculateETA function
    setETA(calculatedETA);
  };

  // Function to calculate ETA based on selected time slot
  const calculateETA = (timeSlot) => {
    // Implement your logic to calculate ETA based on the selected time slot
  };

  const handleConfirm = () => {
    setShowConfirmation(true); // Show pickup confirmation
  };

  const handleViewETA = () => {
    setShowETA(true); // Show ETA notification
  };
  
  const handleCloseETA = () => {
    setShowETA(false); // Hide ETA notification
  };

  const handleDriverArrival = () => {
    setShowDriverArrival(true); // Show driver arrival notification
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Donation Pickup</h2>
        <div className="custom-dropdown"> {/* Apply custom-dropdown class */}
          <select
            id="transportation"
            value={selectedTransportation}
            onChange={handleTransportationChange}
          >
            <option value="">Select transportation</option>
            {transportationOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time-slot">Time Slot:</label>
          <TimePickerr
            selectedTimeSlot={selectedTimeSlot}
            onChange={handleTimeSlotChange}
          />
        </div>
        <button className="eta-button" onClick={handleViewETA}>View ETA</button>
        <button className="confirm-button" onClick={handleConfirm}>Confirm Donation</button>
        {showETA && <ETANotificationn eta={eta} onClose={handleCloseETA} />} {/* Render ETA notification if showETA is true */}
        {showConfirmation && (
          <PickupConfirmationn
            onClose={() => {
              setShowConfirmation(false);
              handleDriverArrival(); // Trigger driver arrival notification after closing confirmation pop-up
            }}
          />
        )} {/* Render Pickup Confirmation if showConfirmation is true */}
        {showDriverArrival && <DriverArrivalNotificationn onClose={() => setShowDriverArrival(false)} />} {/* Render Driver Arrival Notification if showDriverArrival is true */}
      </div>
    </div>
  );
};

export default DonationPopup;