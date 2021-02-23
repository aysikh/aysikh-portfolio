import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

export default function Contact(){ 

  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4),
      display: "absolute",
      left: "20%",
      height: "80vh",
      width: "120vh"
    },
  }))

  const classes = useStyles();

  return (
    <div>
      <Container className={classes.paper}>
        <Paper elevation={3}>
          <form autoComplete="on">
            <TextField 
              fullWidth
              id="outlined-basic" 
              label="Name" 
              variant="outlined" 
              />
              <br /> <br />

              <TextField 
              fullWidth
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              />
              <br /> <br />

              <TextField 
              fullWidth
              id="outlined-basic" 
              label="Phone Number" 
              variant="outlined" 
              />
              <br /> <br />
              
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Your response"
              multiline
              rows={15}
              variant="outlined"
              
            />
              <br/> <br/> 
              <Button 
                type="submit" 
                variant="contained" 
                color="primary">
                Submit
              </Button> 
            </form>
        </Paper>
        </Container>
    </div>
  )
}