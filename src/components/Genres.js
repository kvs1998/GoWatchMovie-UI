import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Genres extends Component {   
  state = { 
    genres: [],
    isLoaded: false,
    error: null,
  };
  
  componentDidMount() {
      fetch("http://localhost:4000/v1/genres/")
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
          genres: json.AllGenres,
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
    const {genres, isLoaded} = this.state
    if(!isLoaded) {
      return <p>LOADING</p>;
    } 
    return (
      <div>        
        <h2>Genres</h2> 
        {genres.map((m)=>(
          <li>
            <Link to={`/OneGenre/${m.id}`}>
              {m.genre_name}
            </Link>
          </li>
        ))}
      </div>
    )
  }
}