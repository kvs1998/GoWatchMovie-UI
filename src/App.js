import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import "./App.css";
import Movies from './components/Movies';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import Genres from './components/Genres';
import OneMovie from './components/OneMovie';
import OneGenre from './components/OneGenre';
import NavBar from './components/NavBar';
import Login from './components/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
    };
    this.handleJwtChange = this.handleJwtChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleJwtChange = (jwt) => {
    console.log("See", jwt)
    this.setState({
      jwt: jwt,    
    })
  }

  logout = () => {
    this.setState({
      jwt: "",    
    })
  }

  render(){
    let loginlink;
    if(this.state.jwt === "") {
      loginlink = <Link to={{pathname: `/login`, handleJwtChange: this.handleJwtChange}} className="nav-link linkclass">Login</Link>
    } else {
      loginlink = <Link to="/logout" className="nav-link linkclass" onClick={this.logout}>Logout</Link>
    }
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark homepage">
        <div className="container-fluid">
          <div className="navbar-brand">
            <h1>Movies.com</h1>
          </div>          
          <h1>{loginlink}</h1>
          <NavBar jwt={this.state.jwt}/> 
        </div>   
        </nav>
        <div>
          <div className="col-md-10">
            <Switch>              
              <Route path="/login" component={(props) => <Login {...props} handleJwtChange={this.handleJwtChange}/>}>
              </Route> 
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
}

