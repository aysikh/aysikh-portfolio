import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useWindowPosition from '../hook/useWindowPosition';
import ProfilePic from '../assets/profilepic.jpg'
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: "35rem",
    width: "30rem"
  },
  stuff: {
    // minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    },
    appbar: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 0px 0px',
        margin: '0',
        border: '0'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        boxShadow: 'none'
    },
    appbarTitle: {
        flexGrow: '1',
        boxShadow: 'none'
    },
    icon: {
        color: 'black',
        fontSize: '2rem',
    },
    colorText: {
        color: '#1a904b',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: 'black',
        fontSize: '4.5rem',
    },
    div:{
        margin: '0',
        border: '0'
    }
}));

export default function AboutMe({ place, checked }) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
        <CssBaseline />
        <div className={classes.root} id="about me">
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <div>
            <Card className={classes.stuff} checked={checked}>
                <CardMedia
                className={classes.media}
                image={ProfilePic}
                title="Profile Picture"
                />
            </Card>
            <Card className={classes.stuff} checked={checked}>
                upcoming software engineer with passion for design
            </Card>
            </div>
        </Collapse>
    </div>
</div>
  );
}