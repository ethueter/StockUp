import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}


const Navbar = () => {
    const [value, setValue] = useState("home");

    const handleChange = (event, newValue) => {
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
          <Tab label="Home" href="/" value="home" {...a11yProps(0)}></Tab>
          <Tab
            label="Portfolio"
            value="portfolio"
            href="/portfolio"
            {...a11yProps(1)}
          ></Tab>
          <Tab
            label="Trade"
            value="trade"
            href="/trade"
            {...a11yProps(2)}
          ></Tab>
          <Tab
            label="Research"
            value="research"
            href="/research"
            {...a11yProps(3)}
          ></Tab>
        </Tabs>
      </AppBar>
    );
}

export default Navbar;