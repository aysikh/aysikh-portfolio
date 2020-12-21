import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink, Redirect, Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '10rem',
    pading: '5rem',
    // backgroundColor: 'transparent',
    // position: 'fixed'
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="transparent"
        textColor="secondary"
        centered
        >
        <Tab label="About Me" to='/aboutme' component={Link}/>
        <Tab label="Projects" to='/projects' component={Link}/>
        <Tab label="Contact Me" to='/resume' component={Link}/>
      </Tabs>
    </Paper>
        </div>
  );
}
