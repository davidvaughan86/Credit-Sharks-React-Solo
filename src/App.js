
import './App.css';
import LandingPage from './components/LandingPage'
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from 'react-router-dom';
import Header from './components/Header'


function App() {
  return (
    <Router>
    <div className="App">
    <Header />
        <Swith>
          <Route path ='/'>
          <LandingPage />
          </Route>
            
             
          



        </Swith>
      






    </div>


    </Router>
    
  );
}

export default App;
