import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import DonorRegistration from './register';
import OrganizationRegistration from './registero';


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/location" element={<DonorRegistration />} />
          <Route path="/alocation" element={<OrganizationRegistration />} />
        </Routes>
      </Router>
    );
  }

export default App;