import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import "./App.css";
import Movies from './components/Movies';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import Genres from './components/Genres';
import OneMovie from './components/OneMovie';
import OneGenre from './components/OneGenre';
import NavBar from './components/NavBar';
 
export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark homepage">
      <div className="container-fluid">
        <div className="navbar-brand">
          <h1>Movies.com</h1>
        </div>
        <NavBar /> 
      </div>   
      </nav>
      <div>
        <div className="col-md-10">
          <Switch>
            <Route path="/OneMovie/:id" component={OneMovie}>
            </Route>
            
            <Route path="/OneGenre/:id" component={OneGenre}>
            </Route>

            <Route path="/movies">
              <Movies />
            </Route>  
            <Route exact path="/genres">
              <Genres />
            </Route>     
            <Route exact path="/admin">
              <AddMovie />
            </Route>              
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>   
    </Router> 
  );
}

