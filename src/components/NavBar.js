import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {    
  render() {    
    return (
        <div className="collapse navbar-collapse navbar" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link linkclass" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link linkclass" to="/movies">Movies</Link>
            </li>                
            <li className="nav-item">
                <Link className="nav-link linkclass" to="/genres">Genres</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link linkclass" to="/admin">Add Movie</Link>
            </li>
            </ul>
        </div>
    )
  }
}