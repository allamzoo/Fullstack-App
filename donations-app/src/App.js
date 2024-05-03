// App.js
import React from 'react';
import Homepage from './homepage'; // Importing Homepage component from Homepage.js
import './App.css'; // Importing CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
      </header>
    </div>
  );
}

export default App;
