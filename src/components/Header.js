import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const Header = ({ tagline, login }) => {
    

    return (
      <Grid container>
        <Grid item xs={10}>
          <h1>Stock UP!</h1>
          <h3>{tagline}</h3>
        </Grid>
        <Grid  
            container
            xs={2}
            alignContent="centered">
            <Button onClick={login}>Account Login</Button>
        </Grid>
      </Grid>
    );
}

export default Header;