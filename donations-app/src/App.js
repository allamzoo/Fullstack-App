import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import DonorRegistration from './register';
import OrganizationRegistration from './registero';
import WelcomePage from './welcom';
import TeachingPostsPage from './teache';
import MedicalCasesPage from './doc';
import ViewRegisteredOrganizations from './org';
import Homepage from './admin';
import HomeScreen from './HomeScreen';
import DonationPopup from './DonationPopup';
import HomeScreenDR from './HomeScreenDR';
import HomeScreent from './HomeScreent';
import HospitalLocationsPage from './HospitalLocationPage';
import SubjectAndClassSelection from './SubjectAndClassSelection';
import ClinicLocation from './ClinicLocation';
import UpdateAccount from './UpdateAccount';
import Dashboard from './dashboard.js';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider

function App() {
    return (
        <Router>
            {/* Wrap all routes with the ThemeProvider */}
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/l" element={<Login />} />
                    <Route path="/admin" element={<Homepage />} />
                    <Route path="/o" element={<ViewRegisteredOrganizations />} />
                    <Route path="/d" element={<MedicalCasesPage />} />
                    <Route path="/t" element={<TeachingPostsPage />} />
                    <Route path="/h" element={<HospitalLocationsPage />} />
                    <Route path="/s" element={<SubjectAndClassSelection />} />
                    <Route path="/c" element={<ClinicLocation />} />
                    <Route path="/hs" element={<HomeScreen />} />
                    <Route path="/hst" element={<HomeScreent />} />
                    <Route path="/hsd" element={<HomeScreenDR />} />
                    <Route path="/location" element={<DonorRegistration />} />
                    <Route path="/alocation" element={<OrganizationRegistration />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
