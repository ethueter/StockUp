import React, { useState, useEffect } from 'react';
import { Router } from "react-router-dom";
import './App.css';
import "fontsource-roboto";

import history from './services/history';
import Routes from './routes';
import { withFirebase } from './components/Firebase';

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
      <Routes authUser={authUser} />
    </Router>
  );
}

export default withFirebase(App);
