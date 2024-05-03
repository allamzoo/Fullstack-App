import React, { useState } from 'react';
import './HomeScreen.css';
import TimePicker from './TimePicker';
import ETANotification from './ETANotification';

const DonationPopup = ({ onClose, availableTimeSlots, transportationOptions }) => {
  const [selectedTransportation, setSelectedTransportation] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showETA, setShowETA] = useState(false);
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
    onClose();
  };

  const handleViewETA = () => {
    setShowETA(true); // Show ETA notification
  };
  const handleCloseETA = () => {
    setShowETA(false); // Hide ETA notification
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Donation Pickup</h2>
        <div className="custom-dropdown">
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
          <TimePicker
            selectedTimeSlot={selectedTimeSlot}
            onChange={handleTimeSlotChange}
            
          />
        </div>
        <button className="eta-button" onClick={handleViewETA}>View ETA</button>
        <button className="confirm-button" onClick={handleConfirm}>Confirm Donation</button>
        {showETA && <ETANotification eta={eta} onClose={handleCloseETA} />} {/* Render ETA notification if showETA is true */}
      
      </div>
    </div>
  );
};

export default DonationPopup;
