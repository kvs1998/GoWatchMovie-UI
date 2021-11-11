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
        <form onSubmit={this.handleSubmit}>
          <h1>ADD MOVIES</h1>
          <div className="form-group">
            <label for="exampleInputName2">Movie Title</label>
            <input type="text" className="form-control" id="exampleInputName2" placeholder="Movie Title" 
            value={movie.title} onChange={this.handleChange} name="title"
            />
          </div>          
          <div className="form-group">
            <label for="exampleInputName2">Description</label>
            <input type="text" className="form-control" placeholder="" 
            value={movie.description} onChange={this.handleChange} name="desc"/>
          </div>          
          <div className="form-group">
            <label for="exampleInputName2">Year</label>
            <input type="text" className="form-control" placeholder="2006-01-02" 
            value={movie.year} onChange={this.handleChange} name="year"/>
          </div>              
          <div className="form-group">
            <label for="exampleInputName2">Rating</label>
            <input type="number" className="form-control" placeholder=""
            value={movie.rating} onChange={this.handleChange} name="rating"/>
          </div>              
          <div className="form-group">
            <label for="exampleInputName2">Mpaa Rating</label>  
            <select className="custom-select"            
            value={movie.mpaa_rating}
            handleChange={this.handleChange}>
              <option selected>Select..</option>
              <option value="1">Pg13</option>
              <option value="2">G</option>
              <option value="3">R</option>
            </select>
          </div>              
          <div className="form-group">
            <label for="exampleInputName2">Movie Genre</label>
            <input type="text" class="form-control" placeholder="" />
          </div>      
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        {JSON.stringify(this.state, null, 3)}
      </div>
    );
  }
}