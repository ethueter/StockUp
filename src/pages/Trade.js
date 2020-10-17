import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const Trade = () => {
    const tagline = "Buy / Sell";
    
    return (
        <Grid container spacing={2}>
            <Header tagline={tagline} />
            <Navbar />
        </Grid>
    )
}

export default Trade;