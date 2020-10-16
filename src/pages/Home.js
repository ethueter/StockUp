import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const Home = () => {
    const tagline = "Build Your Fantasy Portfolio Today!";

    return (
      <Grid container spacing={3}>
        <Header tagline={tagline}/>
        <Navbar />
      </Grid>
    );
};

export default Home;