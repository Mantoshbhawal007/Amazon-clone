// import logo from './logo.svg';
import React,{useEffect} from "react"
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import{auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once when the app loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS>>>',authUser)
      if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
// eslint-disable-next-line
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/checkout">
           <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/">
        <Header/>
         <Home/>
        </Route>
         
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;


