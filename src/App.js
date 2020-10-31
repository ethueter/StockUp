import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "fontsource-roboto";

import history from './services/history';
// import Routes from './routes';
import { withFirebase } from './components/Firebase';
import { AuthUserContext } from './components/Session';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Trade from './pages/Trade';
import Research from './pages/Research';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';

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
    <AuthUserContext.Provider value={authUser}>
      <Router history={history}>
        <Header />
        <Navigation />
        <hr />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/research" component={Research} />
        <Route path="/trade" component={Trade} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
      </Router>
    </AuthUserContext.Provider>
  );
}

export default withFirebase(App);
