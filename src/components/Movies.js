import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component { 
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
      error: null,
    };  
    this.delete = this.delete.bind(this)
  } 

  delete = (id) => {  
    console.log("DELETE", id)  
    fetch("http://localhost:4000/v1/admin/deletemovie/"+ id)
        .then(response => response.json())
        .then(()=> {
          this.setState({
          movies: this.state.movies.filter((i, _) => i.id != id)
        })        
        })
        .catch(error => console.log('delete error', error))
  }

  componentDidMount() {
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
          <table class="table table-hover"> 
            <thead>
              <tr>
                <th scope="col"><h3 className="titletext">Movies</h3></th>
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
                  <td><i className="bi bi-trash white" onClick={() => this.delete(m.id)}></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )
    }
  }
}