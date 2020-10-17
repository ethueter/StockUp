import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const Home = () => {
    const tagline = "Build Your Fantasy Portfolio Today!";

    return (
      <Grid container spacing={2}>
        <Header tagline={tagline} />
        <Navbar />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item lg="9">
            <Paper>
              <h2>Headline One</h2>
            </Paper>
          </Grid>
          <Grid item lg="3">
            <Paper>
              <h2>About This Site</h2>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
};

export default Home;