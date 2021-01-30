
import './componentCSS/buttonCSS.css'
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

    <Header style={{backgroundColor:'grey'}}/>
    <Switch>
      <Route path ='/'exact>
        <LandingPage />
      </Route>
      
            
             
          



    </Switch>
      






    </div>


    </Router>
    
  );
}

export default App;
