import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';


const Research = () => {
    const tagline = "Find Your Diamond"

    return (
        <Grid container spacing={2}>
            <Header tagline={tagline} />
            
        </Grid>
    )
}

export default Research;