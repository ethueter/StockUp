import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import SignOutButton from './SignOut';


const Header = ({ tagline, login, loginTemp }) => {
    

    return (
      <Grid container>
        <Grid item={true} xs={10}>
          <h1>Stock UP!</h1>
          <h3>{tagline}</h3>
        </Grid>
        <Grid  
            item
            xs={2}>
            <Button onClick={loginTemp}>Account Login</Button>
          {login ? <SignOutButton /> : null}
        </Grid>
      </Grid>
    );
};

export default Header;