import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
//import {Switch} from "react-router";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Login from './Login';
import { auth } from './firebase1';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51KfLiSSJKulUw9ubN53sssEZBwI8gJ4F5Q9nxroZ9ayZNFKrLumsjBxA4Lw77lydXt7UTVcsqHVklevEI60QCgcZ00zAMyfamF');

function App() {
    const[{}, dispatch] = useStateValue();

    useEffect(() => {
        //will only runs once when the app components loads....
        
        auth.onAuthStateChanged(authUser => {
          console.log('THE USER IS >>>', authUser);
          
          if(authUser){
            //user just logged in
            
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
          }else{
            //user is logged out

            dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        })
    }, [])
  return (
    <Router>
    <div className="app">
    
        <Switch>
              <Route path="/login">
                 <Login />
              </Route>
              <Route path="/checkout">
                  <Header/>
                 <Checkout/>
              </Route>
              <Route path="/payment">
                 <Header />
                 <Elements stripe={promise}>
                    <Payment />
                 </Elements>
              </Route>
              <Route path="/">
                  <Header/>
                  <Home />
              </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
