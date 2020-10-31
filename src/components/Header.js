import React from 'react';
import Grid from '@material-ui/core/Grid';



const Header = ({ tagline }) => {
    

    return (
      <Grid container>
        <Grid item={true} xs={10}>
          <h1>Stock UP!</h1>
          <h3>{tagline}</h3>
        </Grid>
        <Grid  
            item
            xs={2}>
        </Grid>
      </Grid>
    );
};

export default Header;