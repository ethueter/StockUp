import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const Header = ({ tagline }) => {
    

    return (
      <Grid container>
        <Grid item xs={10}>
          <h1>Stock UP!</h1>
          <h3>{tagline}</h3>
        </Grid>
        <Grid  
            className="loginButton" 
            item 
            xs={2}
            alignContent="centered">
            <Button>Account Login</Button>
        </Grid>
      </Grid>
    );
}

export default Header;