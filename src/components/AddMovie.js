import React, {Component} from 'react';
import axios from 'axios';

export default class AddMovie extends Component {    
  constructor(props) {
    super(props);
    this.state = {
      movie: {        
        id: "",
        title: "",
        release_date: "",
        runtime: "",
        mpaa_rating: "",
        rating: "",
        description: "",
      },
      isLoaded: false,
      error:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    console.log("Target",event.target.value)
    console.log("Name",event.target.name)

    this.setState((prevState) => ({
      movie: {
        ...prevState.movie,
        [event.target.name]: event.target.value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { movie } = this.state;
    const data=new FormData()
    const payload=Object.fromEntries(data.entries()) 
    console.log("payload",JSON.stringify(movie))
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(movie)
    };
    fetch("http://localhost:4000/v1/admin/insertmovie", requestOptions)
        .then(response => response.json())
        .then((data)=>console.log("data", data))
        .catch(error => console.log('Form submit error', error))
  }

  render() {    
    var {movie, isLoaded} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group">
            <label for="exampleInputName2" className="col-sm-2 col-form-label">Movie Title</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="exampleInputName2"
              placeholder="Movie Title" 
              value={movie.title} onChange={this.handleChange} name="title"
              />
            </div>
          </div>          
          <div className="form-group">
            <label for="exampleInputName2" className="form-label mt-4">Description</label>
            <div className="col-sm-10">
              <textarea rows="3" className="form-control" placeholder="" 
              value={movie.description} onChange={this.handleChange} name="description"/>
            </div>
          </div>          
          <div className="form-group">
            <label for="exampleInputName2" className="form-label mt-4">Year</label>            
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="2006-01-02" 
              value={movie.year} onChange={this.handleChange} name="year"/>
            </div>
          </div>              
          <div className="form-group">
            <label for="exampleInputName2" className="form-label mt-4">Rating</label>            
            <div className="col-sm-10">
              <input type="number" className="form-control" placeholder="1-5"
              value={movie.rating} onChange={this.handleChange} name="rating"/>
            </div>
          </div>              
          <div className="form-group">
            <label for="exampleInputName2" className="form-label mt-4">Mpaa Rating</label>  
            <select className="form-select selectform"            
              value={movie.mpaa_rating}
              onChange={this.handleChange}
              name="mpaa_rating">
              <option value="PG13">Pg13</option>
              <option value="G">G</option>
              <option value="R">R</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>        
        </form>
        {JSON.stringify(this.state, null, 3)}
      </div>

    );
  }
}