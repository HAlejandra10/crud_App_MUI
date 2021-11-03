// @packages
import React from 'react'

// @scripts
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';




const Contact = () =>{
    

    return (
        <form noValidate autoComplete="off"> 
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