import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "fontsource-roboto";

import history from './services/history';
// import Routes from './routes';
import { withFirebase } from './components/Firebase';
// import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Trade from './pages/Trade';
import Research from './pages/Research';
import SignUpPage from './components/SignUp';

const App = ({ firebase }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser 
        ? setAuthUser(authUser) 
        : setAuthUser(null);
    });
  }, [firebase.auth])


  return (
    <Router history={history}>
      <Header />
      <Navigation authUser={authUser}/>
      <hr />
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/research" component={Research} />
      <Route path="/trade" component={Trade} />
      <Route path="/signup" component={SignUpPage} />
    </Router>
  );
}

export default withFirebase(App);
