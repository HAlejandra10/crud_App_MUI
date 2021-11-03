// @packages
import React, { useState } from 'react'

// @scripts
import {nanoid} from 'nanoid';
// import TextField from '@material-ui/core/TextField';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import  Button from '@material-ui/core/Button';
// import  FormControl from '@material-ui/core/FormControl';
import data from '../json/usersdata.json';
//import { Button } from '@material-ui/core';
//import Usertable from '../pages/usertable';

const Users = () => {
  //const usuarios = usersinfo.usersinfo 
  //const Usertable = () => {}

const [usuarios, setUsuarios] = useState(data);
const [addFormData, setaddFormData] = useState({

     name: '',
     lastname: '',
     email: '',
     phone: '', 
     gender: ''

});

const handleAddFormChange = (event) =>{
   event.preventDefault();
  
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;

  const newFormData = {...addFormData};
  newFormData[fieldName] = fieldValue;

  setaddFormData(newFormData);
};

const handleAddFormSubmit=(event)=> {
   event.preventDefault();

   const newUser = {
     id: nanoid(),
      name: addFormData.name,
      lastname: addFormData.lastname,
      email: addFormData.email,
      phone: addFormData.phone,
      gender: addFormData.gender
   };
   const newUsers = [...usuarios, newUser]
   setUsuarios(newUsers);
 

}
 

 console.log(data);



return (
          
<div>

<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>

          {usuarios.map((usuario)=>(
            
              <tr>
               <td>{usuario.name}</td>
               <td>{usuario.lastname}</td>
               <td>{usuario.email}</td>
               <td>{usuario.phone}</td>
               <td>{usuario.gender}</td>
           </tr>
           ))}   
        </tbody>
      </table>
     <h2>New A User</h2>
      <form onSubmit={handleAddFormSubmit} >
        <input
         type="text" 
        name='name'
         required='required'
         placeholder='Enter a name...'
        onChange={handleAddFormChange}
        />
        <input 
        type="text"  
        name='lastname' 
        required='required' 
        placeholder='Enter a Lastname...' 
        onChange={handleAddFormChange}
        />
        <input 
        type="text"
         name='email'
         required='required' 
         placeholder='Enter a Email...' 
         onChange={handleAddFormChange}/>
        <input
         type="text" 
         name='phone' 
         required='required' 
         placeholder='Enter a Phone...' 
         onChange={handleAddFormChange}
         />
        
  <p>Gender:</p>
  <input type="radio" id="html" name="gender" value="Femenine" onChange={handleAddFormChange}/>
  <label for="femenine">Femenine</label><br/>
  <input type="radio" id="masculine" name="gender" value="Masculine" onChange={handleAddFormChange}/>
  <label for="masculine">Masculine</label><br/>
  <input type="radio" id="other" name="gender" value="Other" onChange={handleAddFormChange}/>
  <label for="other">Other</label>
   <button type='submit'>Submit</button> 
   {/* <Button type= 'submit' variant="outlined">Submit</Button> */}
      </form>
     </div>
    );
  };

  export default Users;

//
/*
1. handleSubmit para el clic para en enviar un formulario ya terminado.
2. onChange: El evento onchange se produce cuando el valor de un elemento se ha cambiado. Para botones de radio y casillas de verificación, el evento onchange ocurre cuando el estado de activación se ha cambiado. Basicamente es cuando se pone otro nombre o un text diferente cuando se trata de un campo de texto, o cuando se cambia el selector. 

*/
