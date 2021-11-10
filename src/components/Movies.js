import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component {  
  state = {
    movies: [],
    isLoaded: false,
    error: null,
  };  
  componentDidMount() {
    // this.setState({
    //   movies: [
    //     {id:1, title: 'The Dark Night', runtime: 123},
    //     {id:1, title: 'The Godfather', runtime: 134},
    //     {id:1, title: 'Spiderman', runtime: 110},
    //   ]
    // })
    fetch("http://localhost:4000/v1/movies")
    .then((response) => {
      console.log("Status code is", response.status)
      if(response.Satus != 200) {
        let err = Error
        err.message = "INVALID"
        this.setState({error: err})
        return response.json()
      } 
    })
    .then((json)=>{
      this.setState({
        movies: json.AllMovies,
        isLoaded:true,
      },
      (error) => this.setState({
        isLoaded: true,
        error
      })
      )
    }) 
  }
  render() {   
    const {movies, isLoaded} = this.state
    if(!isLoaded) {
      return <p>LOADING</p>;
    } 
    else {
      return (
        <Fragment>        
          <h2>Movies</h2>
          <ul>
            {this.state.movies.map( (m) => (
              <li key={m.id}>
                <Link to={`/OneMovie/${m.id}`}>{m.title}</Link>              
              </li> 
            ) )}
          </ul>
        </Fragment>
      )
    }
  }
}