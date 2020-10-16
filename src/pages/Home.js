import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Stock UP!</h1>
          <h3>Build Your Fantasy Portfolio Today!</h3>
        </Grid>
        <Paper className="navbar">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab 
                label="Portfolio"
                href="/portfolio"
            >
            </Tab>
            <Tab
                label="Trade"
                href="/trade"
            ></Tab>
                    <Tab
                        label="Research"
                        href="/research"
                    ></Tab>
          </Tabs>
        </Paper>
      </Grid>
    );
};

export default Home;