import React from 'react';
import Grid from '@material-ui/core/Grid';


import { Card, Paper, Typography, CardContent } from '@material-ui/core';


const Portfolio = () => {
    
    return (
      <Grid container spacing={2}>
        
        <Grid container
                direction="row"
                justify="space-around"
                alignItems="stretch"
                spacing={3}>
          <Grid item md="auto">
            <Paper>
              <Typography variant="h4" gutterBottom>
                Current Holdings
              </Typography>
            </Paper>
          </Grid>
          <Grid item md="auto">
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