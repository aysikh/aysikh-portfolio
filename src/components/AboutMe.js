import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import ProfilePic from '../assets/profilepic.jpg'

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

export default function AboutMe({ place, checked }) {
  const classes = useStyles();
//   const checked = useWindowPosition('header');

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div>
        <Card className={classes.stuff} checked={checked}>
            <CardMedia
            className={classes.media}
            image={ProfilePic}
            title="Contemplative Reptile"
            />
        </Card>
        <Card className={classes.stuff} checked={checked}>
            upcoming software engineer with passion for design
        </Card>
        </div>
    </Collapse>
  );
}