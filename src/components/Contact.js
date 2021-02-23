import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'

export default function Contact(){ 

  return (
    <div>
      <Paper elevation={3}>
                  <form autoComplete="on">
                    <TextField 
                      fullWidth
                      id="outlined-basic" 
                      label="Title" 
                      variant="outlined" 
                      />
                      <br /> <br />
                      
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Your response"
                      multiline
                      rows={30}
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
    </div>
  )
}