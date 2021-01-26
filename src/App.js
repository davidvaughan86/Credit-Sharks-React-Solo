
import './App.css';
import LandingPage from './LandingPage'
import {
  Browserrouter as Router, 
  Switch, 
  Route, 
  Link
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <LandingPage />
    </div>
  );
}

export default App;
