import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Navbar = () => {
    const [value, setValue] = useState("home");

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={() => handleChange(value)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" href="/" value="home"></Tab>
          <Tab label="Portfolio" value="portfolio" href="/portfolio"></Tab>
          <Tab label="Trade" value="trade" href="/trade"></Tab>
          <Tab label="Research" value="research" href="/research"></Tab>
        </Tabs>
      </AppBar>
    );
}

export default Navbar;