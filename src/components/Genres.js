import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Genres extends Component {   
  constructor(props) {
    super(props);       
    this.state = { 
      genres: [],
      isLoaded: false,
      error: null,
    };  
  }
  
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
        <table class="table table-hover"> 
          <thead>
            <tr>
              <th scope="col"><h3 className="titletext">Genres</h3></th>
            </tr>
          </thead>        
          <tbody>
            {genres.map((m)=>(                      
              <tr class="table-active"> 
                <th scope="row">               
                  <li>
                    <Link className="nav-link active tablelink" to={{pathname: `/OneGenre/${m.id}`, genrename: m.genre_name}}>
                      {m.genre_name}
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