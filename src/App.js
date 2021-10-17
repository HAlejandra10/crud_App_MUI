import React from 'react';
import './App.css';
import Navbar from './layout/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/index ';
import About from './pages/about';

import Users from './pages/users';
import Contact from './pages/contact';



const  App=()=> {
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

export default App;
