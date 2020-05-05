import React from 'react';
import {
  Route, 
  Switch,  
  BrowserRouter as Router } from 'react-router-dom';
import SearchArist from '../../containers/SearchArtist';
import SearchAlbum from '../../containers/SearchAlbum';

export default function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={SearchArist} /> 
          <Route exact path='/Albums/:artistId' component={SearchAlbum} />
        </Switch>
      </Router>
    </>
  );
}
  
// search album takes an artist id
