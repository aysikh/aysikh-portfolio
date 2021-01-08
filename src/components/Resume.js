import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import ResumePDF from '../assets/SE-Resume2021.pdf'
import Button from '@material-ui/core/Button';

export default function Resume() {

  return(
    <div>
      <center>
        <iframe src={ResumePDF} style={{height:'55rem', width: '50rem'}}/>
        <br /> 
      <Button style={{height: '2.5rem', padding: '2rem', backgroundColor: 'pink'}}>
        <Link to="/"  style={{textDecoration: 'none', fontSize: '3rem'}}>
            {"Back to Home"}
        </Link>
      </Button>
      </center>
    </div>
  )
}