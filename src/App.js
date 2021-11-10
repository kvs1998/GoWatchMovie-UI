import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import Movies from './components/Movies';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import Genres from './components/Genres';
import OneMovie from './components/OneMovie';
import OneGenre from './components/OneGenre';
 
export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">GoWatchMovie!!</h1>
          <hr className="mb-3"></hr>
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav >
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>                
                <li className="list-group-item">
                  <Link to="/genres">Genres</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Add Movie</Link>
                </li>
              </ul>
            </nav>
          </div>
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

              {/* <Route
              exact
              path="/by-category/drama"
              render={(props) => <Categories {...props} title={`Drama`}/>}
              /> */}

              <Route exact path="/admin">
                <AddMovie />
              </Route>              
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>  
    </Router> 
  );
}


function CategoryPage() {
  let { path, url } = useRouteMatch()
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li><Link to={`${path}/drama`}>Drama</Link></li>
        <li><Link to={`${url}/comedy`}>Comedy</Link></li>
      </ul>
    </div>
  ) 
} 