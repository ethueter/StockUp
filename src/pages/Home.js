import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Snapshot from '../components/Snapshot';


const Home = () => {
    const [login, setLogin] = useState(false);
    const tagline = "Build Your Fantasy Portfolio Today!";

    const handleLogin = () => {
      setLogin(!login);
    }

    return (
      <Grid container spacing={2}>
        <Header tagline={tagline} login={login} loginTemp={handleLogin} />
        <Navbar />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item md="auto">
            <Card>
              
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    Top Market News
                  </Typography>
                  <h4>Headline 1</h4>
                  <h4>Headline 2</h4>
                </CardContent>
              
            </Card>
          </Grid>
          <Grid item md="auto">
            {login ? (
              <Snapshot />
            ) : (
              <Card variant="outlined" raised>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    About This Site
                  </Typography>
                  <Typography variant="body2" component="p">
                    Play to win!
                    <br />
                    Open your account with a virtual $10K on us. Research, and
                    trade to build the best portfolio.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>Open Account</Button>
                </CardActions>
              </Card>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
};

export default Home;