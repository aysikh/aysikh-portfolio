import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { IconButton, Collapse, Fade } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AboutMeContainer from '../containers/AboutMeContainer'


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            boxShadow: 'none',
            margin: '0',
            border: '0',
            overflowX: 'hidden'
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

    export default function Header() {
        const classes = useStyles();
        const [checked, setChecked] = useState(false);
        useEffect(() => {
            setChecked(true);
        }, []);


    return (
        <div className={classes.div}>
            {/* <CssBaseline /> */}
            <div className={classes.root} id="welcome">
            <Fade
                in={checked}
                {...(checked ? { timeout: 2000 } : {})}
                collapsedHeight={50}
                >
                <div className={classes.container}>
                <h1 className={classes.title}>
                    software engineer 
                    <br />
                    <span style={{color: '#f8bbd0'}}>amy sikhammountry</span>
                </h1>

                <h3>learn more about me below </h3>

                <Scroll to="about me" smooth={true}>
                    <IconButton>
                        <KeyboardArrowDownIcon style={{color: '#c48b9f', fontSize: '5rem'}} />
                    </IconButton>
                </Scroll>
                </div>
            </Fade>

            </div>
            <AboutMeContainer />
        </div>
    );
    }

