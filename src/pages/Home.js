import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from "../components/Navbar";


const Home = () => {
    

    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Stock UP!</h1>
          <h3>Build Your Fantasy Portfolio Today!</h3>
        </Grid>
        <Navbar />
      </Grid>
    );
};

export default Home;