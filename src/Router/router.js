// ---------- React imports
import React from 'react';

// ---------- Components imports
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { Link } from "react-router-dom";
import About from '../pages/about';
import Home from '../pages/home/index ';


const Routing = ( )=>{
        return (
         <Router>
            <ul>
            <li>
                <Link to='/home'>
                <Home/>
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    <About/>
                </Link>
            </li>
        </ul>
           
             
           <div>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about" component={About}/>
            </Switch>
           </div>
            
             
         </Router>
         
    
        );
    
}

export default Routing;