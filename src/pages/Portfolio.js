import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const Portfolio = () => {
    const tagline = "Your Portfolio"
    return (
        <Grid container spacing={2}>
            <Header tagline={tagline} />
            <Navbar />
        </Grid>
    )
}

export default Portfolio;