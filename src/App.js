
import './componentCSS/buttonCSS.css'
import './App.css';
import LandingPage from './components/LandingPage'
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  useHistory
} from 'react-router-dom';
import Header from './components/Header'
import Products from './components/Products'
import Registration from './components/Registration'
import 'semantic-ui-css/semantic.min.css'
import ThankYou from './components/ThankYou'
import ContactUs from './components/Email'
import {useState, useEffect} from 'react'
import CheckoutForm from './components/Checkout'
import MyCart from './components/MyCart'
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";




function App() {
  const stripePromise= loadStripe('sk_test_51IGFn2AqeHzkXuKGXB7h7VdT2mAbcAR6EH4WTNydN50253z8Jx2rZQotbLpCfSYn3zKnQ4qRm3CDlDmGdmKxHu9d00HLbiWRog')
  const [cart, setCart] = useState([])
  function addToCart (item) {
    setCart ([...cart,
     item])
     //history.push('/checkout') "usehistory in react doc"
      

  }
  

  return (
    <Router>
    <div className="App">

    <Header />
    <Switch>
      <Route path ='/'exact>
        <LandingPage />
      </Route>
      <Route path ='/packages'>
        <Products addToCart={addToCart}/>
      </Route>
      <Route path ='/registration' >
        <Registration />
      </Route>
      <Route path ='/email'>
        <ContactUs />
      </Route>
      <Route path ='/myCart'>
        <MyCart cart={cart} />
      </Route>
      <Elements stripe ={stripePromise}>
        <CheckoutForm cart={cart}/>
      </Elements>
      <Route path ='/thanks'>
        <ThankYou />
      </Route>

      
            
             
          



    </Switch>
      






    </div>


    </Router>
    
  );
}

export default App;
