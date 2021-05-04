import React, {useState, useEffect} from 'react'; 
import { makeStyles} from '@material-ui/core/styles'
import { Collapse } from '@material-ui/core';
import NavBar from '../components/NavBar'

const useStyles = makeStyles((theme) => ({
  test: {

  }
}))

export default function MainContainer(){
  const classes = useStyles();
  const checked = useWindowPosition('main container')

  return (
    <div id="main container">
      <NavBar checked={checked}/> 

      <div className={classes.root}>
            <Collapse
            in={checked}
            {...(checked ? {timeout: 2000} : {})}
            collapsedHeight={50}
            >
            <AboutMe checked={checked}/>
            </Collapse>
        </div>
        
    </div>
  )

}