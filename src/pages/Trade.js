import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';



const Trade = () => {
    const tagline = "Buy / Sell";
    
    return (
        <Grid container spacing={2}>
            <Header tagline={tagline} />
            
        </Grid>
    )
}

export default Trade;