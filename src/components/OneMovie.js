import React, {Component, Fragment} from 'react';

export default class OneMovie extends Component {   
  state = { 
    movie: {},
    isLoaded: false,
    error: null,
  };
  
  componentDidMount() {
      fetch("http://localhost:4000/v1/movie/" + this.props.match.params.id,)
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
          movie: json.LatestMovie,
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
    const {movie, isLoaded} = this.state
    if(!isLoaded) {
      return <p>LOADING</p>;
    } 
    return (
        <Fragment>
            <h2>Movie: {this.state.movie.title}</h2>
            <p>Rating: {this.state.movie.rating}</p>
        </Fragment>
    )
  }
}