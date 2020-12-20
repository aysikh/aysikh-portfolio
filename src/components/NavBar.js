import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
        <Tab label="About Me" />
        <Tab label="Projects" />
        <Tab label="Contact Me" />
      </Tabs>
    </Paper>
        </div>
  );
}
