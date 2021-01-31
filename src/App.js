
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
import Products from './components/Products'


function App() {
  return (
    <Router>
    <div className="App">

    <Header />
    <Switch>
      <Route path ='/'exact>
        <LandingPage />
      </Route>
      <Route path ='/packages'>
        <Products />
      </Route>

      
            
             
          



    </Switch>
      






    </div>


    </Router>
    
  );
}

export default App;
