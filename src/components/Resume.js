import React from 'react';
import ResumePDF from '../assets/SE-Resume2021.pdf'
import { Document, Page } from 'react-pdf'

export default function Resume() {

  return(
    <div>
      <Document file={ResumePDF}>
        <Page pageNumber={1}/>
      </Document>
      
    </div>
  )
}