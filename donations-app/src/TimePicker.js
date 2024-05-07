// TimePicker.js

import React from 'react';

const TimePicker = ({ selectedTimeSlot, onChange }) => {
  // Define time slot options
  const timeSlotOptions = [
    { value: '9-11 am', label: '9-11 am' },
    { value: '11 am - 1 pm', label: '11 am - 1 pm' },
    { value: '1-3 pm', label: '1-3 pm' },
    { value: '3-5 pm', label: '3-5 pm' },
    { value: '5-7 pm', label: '5-7 pm' },
  ];

  return (
    <select
      id="time-slot"
      value={selectedTimeSlot}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select time slot</option>
      {timeSlotOptions.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default TimePicker;
