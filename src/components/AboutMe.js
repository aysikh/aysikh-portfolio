import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
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

}));

export default function AboutMe({ checked }) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
        <div className={classes.root} id="about me">
            <div>
            <Card checked={checked}>
                <CardMedia
                className={classes.media}
                image={ProfilePic}
                title="Profile Picture"
                />
            </Card>
            <Card >
                just a scrub doing scrub things
            </Card>
            </div>
        </div>
    </div>
  );
}