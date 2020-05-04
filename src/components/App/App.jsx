import React from 'react';
import {
  Route, 
  Switch,  
  BrowserRouter as Router } from 'react-router-dom';
import SearchArist from '../../containers/SearchArtist';

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={SearchArist} /> 
          {/* <Route exact path='/Detail/:id' component={DetailContainer} /> */}
        </Switch>
      </Router>
    </>
  );
}
  
