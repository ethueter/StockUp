import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={'/portfolio'}>Portfolio</Link>
            </li>
            <li>
                <Link to={"/trade"}>Trade</Link>
            </li>
            <li>
                <Link to={"/research"}>Research</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;
