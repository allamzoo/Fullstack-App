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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDriverArrival, setShowDriverArrival] = useState(false);
  const [eta, setETA] = useState('');

  const handleTransportationChange = (e) => {
    setSelectedTransportation(e.target.value);
  };

  const handleTimeSlotChange = (time) => {
    setSelectedTimeSlot(time);
    const calculatedETA = calculateETA(time);
    setETA(calculatedETA);
  };

  const calculateETA = (timeSlot) => {
    // Implement your logic to calculate ETA based on the selected time slot
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowDriverArrival(true);
    }, 10000); // 10 seconds delay
  };

  const handleViewETA = () => {
    setShowETA(true);
  };

  const handleCloseETA = () => {
    setShowETA(false);
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
          <TimePickerr
            selectedTimeSlot={selectedTimeSlot}
            onChange={handleTimeSlotChange}
          />
        </div>
        <button className="eta-button" onClick={handleViewETA}>View ETA</button>
        <button className="confirm-button" onClick={handleConfirm}>Confirm Donation</button>
        {showETA && <ETANotificationn eta={eta} onClose={handleCloseETA} />}
        {showConfirmation && (
          <PickupConfirmationn
            onClose={() => {
              setShowConfirmation(false);
            }}
          />
        )}
        {showDriverArrival && <DriverArrivalNotificationn onClose={() => setShowDriverArrival(false)} />}
      </div>
    </div>
  );
};

export default DonationPopup;
