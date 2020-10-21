import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Card, Paper, Typography, CardContent } from '@material-ui/core';


const Portfolio = () => {
    const tagline = "Your Portfolio"
    return (
      <Grid container spacing={2}>
        <Header tagline={tagline} />
        <Navbar />
        <Grid container
                direction="row"
                justify="space-around"
                alignItems="stretch"
                spacing={3}>
          <Grid item md="9">
            <Paper>
              <Typography variant="h4" gutterBottom>
                Current Holdings
              </Typography>
            </Paper>
          </Grid>
          <Grid item md="3">
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        <Paper>
                            <h4>Goals</h4>
                        </Paper>
                    </Typography>
                </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default Portfolio;