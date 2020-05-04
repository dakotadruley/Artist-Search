import React from 'react';
import {
  Route, 
  Switch,  
  BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={QueenContainer} /> 
          <Route exact path='/Detail/:id' component={DetailContainer} />
        </Switch>
      </Router>
    </>
  );
}
  
