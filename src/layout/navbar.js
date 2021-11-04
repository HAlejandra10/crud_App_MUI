// @packages
import React from 'react'
import  AppBar from '@material-ui/core/AppBar'; 
import  Toolbar from '@material-ui/core/Toolbar'; 
import  Typography from '@material-ui/core/Typography'; 
import {makeStyles} from '@material-ui/core';
import  Link from "react-router-dom/Link";


const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
 
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));
  

const Navbar =() => {
    const classes = useStyles();
    return (
        
         <AppBar position="static">
          <Toolbar>
              <Typography variant="h4" className={classes.logo}>
                 CRUD REACT
             </Typography>        
              <div className={classes.navlinks}>
            <Link to="/home" className={classes.link}>
              Home
            </Link> 
            <Link to="/about" className={classes.link} >
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/users" className={classes.link}>
              Users
            </Link>
            <Link to="/counter" className={classes.link}>
              Counter
            </Link>
          </div>
      </Toolbar>
    </AppBar>

    );
};

export default Navbar;
