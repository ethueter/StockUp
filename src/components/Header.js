import React from 'react';
import Grid from '@material-ui/core/Grid';


const Header = ({ tagline }) => {
    

    return(
        <Grid item xs={12}>
            <h1>Stock UP!</h1>
            <h3>{tagline}</h3>
        </Grid>
    )
}

export default Header;