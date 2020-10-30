import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const Navbar = () => {
    const classes = useStyles();
    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={() => handleChange(value)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Home" href="/" value="home" {...a11yProps(0)}></Tab>
            <Tab
              label="Portfolio"
              value="1"
              href="/portfolio"
              {...a11yProps(1)}
            ></Tab>
            <Tab
              label="Trade"
              value="2"
              href="/trade"
              {...a11yProps(2)}
            ></Tab>
            <Tab
              label="Research"
              value="3"
              href="/research"
              {...a11yProps(3)}
            ></Tab>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          testing home
        </TabPanel>
        <TabPanel value={value} index={1}>
          testing portfolio
        </TabPanel>
        <TabPanel value={value} index={2}>
          testing trade
        </TabPanel>
        <TabPanel value={value} index={3}>
          testing research
        </TabPanel>
      </div>
    );
}

export default Navbar;