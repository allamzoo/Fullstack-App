import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import LocationMappingScreen from './mapping';
import Tabbakh from './upload';
import DonationPost from './update';
import AccountSettings from './updateinfo';
import OrganizationDonationPosts from './fulfilled';
import DonationDetails from './details';
import DonationViewOptions from './DonationViewOptions';
import DonationPostt from './post';
import ScheduleDropoff from './schedule';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/location" element={<LocationMappingScreen />} />
        <Route path="/another-location" element={<Tabbakh />} />
        <Route path="/yet-another-location" element={<DonationPost />} />
        <Route path="/and-one-more-location" element={<AccountSettings />} />
        <Route path="/notifications" element={<OrganizationDonationPosts />} />
        <Route path="/post" element={< DonationPostt/>} />
        <Route path="/details" element={< DonationDetails/>} />
        <Route path="/schedule" element={< ScheduleDropoff/>} />
        <Route path="/DonationViewOptions" element={< DonationViewOptions/>} />
        
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App ; 