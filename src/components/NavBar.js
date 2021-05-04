import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink, Redirect, Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '10rem',
    pading: '5rem',
    // backgroundColor: 'transparent',
    // position: 'fixed'
  },
  text: {
    color: "black",
    lineHeight: '3',
    letterSpacing: '0.47em',
    textDecoration: 'none',
    textAlign: 'right'
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
        {/* {<Link to="/aboutme" className={classes.link}>
            <ListItem button key={"aboutme"} className={classes.text}>
            <ListItemText primary={"About Me"} style={{height: '2.5rem'}} />
            </ListItem>
        </Link>} */}
        <Tab label="About Me" to='/aboutme' component={Link}/>
        <Tab label="Projects" to='/projects' component={Link}/>
        <Tab label="Resume" to='/resume' component={Link}/>
        <Tab label="Contact" to='/contact' component={Link}/>
      </Tabs>
    </Paper>
        </div>
  );
}
