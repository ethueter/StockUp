import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
      <AuthUserContext.Consumer>
        {authUser => 
            authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
            <Link to={"/trade"}>Trade</Link>
        </li>
        <li>
            <Link to={"/research"}>Research</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/signup"}>Sign Up</Link>
        </li>
        <li>
            <Link to={"/signin"}>Sign In</Link>
        </li>
    </ul>
)

export default Navigation;
