// @packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// @scripts
import About from '../pages/about';
import Home from '../pages/home/index ';
import Navbar from '../layout/navbar';
import Users from '../pages/users';
import Contact from '../pages/contact';



const Routing = ( )=>{
        return (
            <Router>
            <Navbar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/users" component={Users} />
            </Switch>
          </Router>
    
        );
    
}

export default Routing;