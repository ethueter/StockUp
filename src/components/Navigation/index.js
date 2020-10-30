import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';

const Navigation = () => (
  <div>
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
        <Link to={"/signup"}>Sign Up</Link>
      </li>
      <li>
          <SignOutButton />
      </li>
    </ul>
  </div>
);

export default Navigation;
