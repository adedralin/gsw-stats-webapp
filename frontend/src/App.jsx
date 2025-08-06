// Import TeamRecord component form the components folder
import TeamRecord from './components/TeamRecord';
import Roster from './components/Roster';
import './App.css'

function App() {
  // main app component that gets rendered by React
  return (
    <div>
      {/* Page title */}
      <h1>Golden State Warriors Dashboard</h1>

      {/* Render the TeamRecord component */}
      <TeamRecord />

      <hr />

      {/* Render the Roster component */}
      <Roster />
    </div>
  );
}

// Export the App component so it can be run by React
export default App;
