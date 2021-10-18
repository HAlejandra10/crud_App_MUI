import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
  
      },
    },
  }));
  

const Contact = () =>{
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off"> 
             <div> 
                <br/> <h1><strong>CONTACT US:</strong> </h1> 
                <br /><TextField id="standard-basic" label="Nombre" /> <br />
        <br />
        <TextField id="standard-basic" label="Apellido" /><br />
        <br />
        <TextField id="standard-basic" label="Email" /><br />
        <br />
        <br />
        <Button variant="contained">Submit</Button>
            </div>
            
        </form>

     
    )
}
  


export default Contact;