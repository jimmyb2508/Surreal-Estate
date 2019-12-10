import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from '../components/NavBar.jsx';
import Properties from './Properties';
import AddProperty from './AddProperty';
import '../styles/app.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar /> 
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </React.Fragment>
 );
};

export default App;