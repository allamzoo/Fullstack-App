import React from 'react';
import ViewOrganizations from './Admin Portal'; // Assuming ViewOrganizations is the correct name of the component
import './Admin Portalc.css'; // Correcting the import statement for the CSS file
import viewOrganizations from './Admin Portal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <viewOrganizations />
      </header>
    </div>
  );
}
/*function viewOrganizations() {
  return (
      <button className="my-button">
       View Organization List
      </button>
  );
}*/

export default viewOrganizations;

