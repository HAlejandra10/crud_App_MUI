import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormLabel from '@material-ui/core/FormLabel';
import { Button, FormControl } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
}));

const user = [
  {
      name: 'Heidy Alejandra',
      lastname: 'Primo',
      email: 'hprimo10@outlook.com',
      tel: '300 456 7896',
      gender: 'woman'
  },
  {
      name: 'Juan carlos',
      lastname: 'Ramirez',
      email: 'juanca2@gmail.com',
      tel: '310 678 5432',
      gender: 'man'
  },
  {
      name: 'Miguel',
      lastname: 'Velez',
      email: 'miguelv@hotmail.com',
      tel: '345 678 1234',
      gender: 'man'
  },
];



const Users = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
   
    return (
      <form className={classes.root} noValidate autoComplete="off">

        <h1>Users</h1>
        <br /><TextField id="standard-basic" label="Nombre" />
         <TextField id="standard-basic" label="Apellido" /><br />
        <br /><TextField id="standard-basic" label="Email" />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /><br />

      <br />
      <div>  
      <br /><FormControl component="fieldset"> 
      <FormLabel component="legend">Gender</FormLabel> 
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}> <br />
        <FormControlLabel value="female" control={<Radio />} label="Female" /> 
        <FormControlLabel value="male" control={<Radio />} label="Male" /> 
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  </div>
  <div>  
      <br /><FormControl component="fieldset"> 
      <FormLabel component="legend">Estado</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}> <br />
        <FormControlLabel value="active" control={<Radio />} label="Activo" /> 
        <FormControlLabel value="inactive" control={<Radio />} label="No Activo" /> 
      </RadioGroup>
    </FormControl>
    <br/>
    <br/><Button variant="contained">Submit</Button>
  </div>
  
      </form>
    );

  };

  export default Users;
