import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class OneGenre extends Component {   
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      isLoaded: false,
      error: null,
    };;
  }

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
        <table class="table table-hover"> 
          <thead>
            <tr>
              <th scope="col"><h3 className="titletext">{this.props.location.genrename}</h3></th>
            </tr>
          </thead>        
          <tbody>
            {movies.map((m)=>(              
              <tr class="table-active"> 
                <th scope="row">               
                  <li>
                    <Link className="nav-link active tablelink" to={`/OneMovie/${m.id}`}>
                      {m.title}
                    </Link>
                  </li>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}