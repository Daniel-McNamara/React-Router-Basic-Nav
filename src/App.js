import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
/*import route*/
import {Route} from 'react-router-dom';


/* create 3 routes setting there path with respective components */
const App = () => (
  <div>
    <Navigation />

      <Route exact path="/"component={Home}/>
      <Route path="/about"component={About}/>
      <Route path="/contact"component={Contact}/>

  </div>
);


export default App;
