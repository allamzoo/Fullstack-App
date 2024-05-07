import React from 'react';
import './App.css';
import ScheduleDropoff from './schedule'; //done
import DonationPost from './post';//done
import DonationDetails from './details';//done
import FulfilledDonationPost from './view posts';//done
import DonorDetails from './view donor details';//done
import DonorContactDetails from './view donor contact';//done
import DonationViewOptions from './DonationViewOptions'; //done



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Add your main application content here */}
        < DonationDetails/>{/* Render the LocationMappingScreen component */}
      </header>
    </div>
  );
}

export default App ; 