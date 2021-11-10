import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class OneGenre extends Component {   
  state = { 
    movies: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    fetch("http://localhost:4000/v1/movies/" + this.props.match.params.id)
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
      console.log(json)
      this.setState({
        movies: json.MoviesByGenre,
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
    } else if(movies == null) {
      return (
        <div>
          NO MOVIES
        </div>
      ) 
    }
    return (
      <div>        
        <h2>Genres</h2> 
        {movies.map((m)=>(
          <li>
            <Link to={`/OneMovie/${m.id}`}>
              {m.title}
            </Link>
          </li>
        ))}
      </div>
    )
  }
}