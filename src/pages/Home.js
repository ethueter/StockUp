import React from 'react';
import { SignUpLink } from '../components/SignUp';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Home = () => {
    

    return (
      <Grid container spacing={2}>
        
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
                 <SignUpLink />
                </CardActions>
              </Card>
          </Grid>
        </Grid>
      </Grid>
    );
};

export default Home;