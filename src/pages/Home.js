import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Home = () => {
    

    return (
       <Grid container spacing={3}>
        <Grid item xs={12}>
            <h1>Stock UP!</h1>
            <h3>Build Your Fantasy Portfolio Today!</h3>
        </Grid>
        <Paper className="navbar">
            <Tabs>
                <Tab></Tab>
            </Tabs>
        </Paper>
       </Grid>
    )
};

export default Home;