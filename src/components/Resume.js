import React, {useState, useEffect} from 'react';
import ResumePDF from '../assets/SE-Resume2021.pdf'

export default function Resume() {

  return(
    <div>
      <center>
        <iframe src={ResumePDF} style={{height:'60rem', width: '50rem'}}/>
      </center>
    </div>
  )
}