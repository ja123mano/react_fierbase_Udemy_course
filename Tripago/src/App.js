import { useState } from 'react';
import './App.css';
import TripList from './Components/TripList'

function App() {
const [showTrips, setShowTrips] = useState(true)

  return (
    <div className="App">
      {showTrips && <button onClick={() => setShowTrips(false)}>Hide trips</button>}
      {!showTrips && (
        <div>
          <button onClick={() => setShowTrips(true)}>Show trips</button>
          <p>Trips are hidden</p>
        </div>
      )}
      {showTrips && <TripList />}
    </div>
  );
}

export default App;
