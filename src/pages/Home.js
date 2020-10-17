import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const Home = () => {
    const tagline = "Build Your Fantasy Portfolio Today!";

    return (
      <Grid container spacing={2}>
        <Header tagline={tagline} />
        <Navbar />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item md="9">
            <Paper>
              <h2>Top Market News</h2>
              <h4>Headline 1</h4>
              <h4>Headline 1</h4>
            </Paper>
          </Grid>
          <Grid item sm="3">
            <Card variant="outlined" raised>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  About This Site
                </Typography>
                <Typography variant="body2" component="p">
                  Play to win! 
                  <br />
                  Open your account with a virtual $10K. Research, and trade to build the best portfolio.
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Open Account</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
};

export default Home;