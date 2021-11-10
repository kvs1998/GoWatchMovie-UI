import React, {Component, Fragment} from 'react';

export default class OneMovie extends Component {   
  state = { 
    movie: {},
    isLoaded: false,
    error: null,
  };
  
  componentDidMount() {
      fetch("http://localhost:4000/v1/movie/" + this.props.match.params.id)
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
    console.log(movie)
    if(!isLoaded) {
      return <p>LOADING</p>;
    } 
    return (
        <Fragment>
          <div className="row">
            <div className="col-sm-9">
              <h4>{movie.title}</h4>
              <div className="row">
                <div className="col-xs-8 col-sm-6 bg-warning">
                  {movie.mpaa_rating}
                </div>
                <div className="col-xs-4 col-sm-6">
                  {movie.runtime}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    )
  }
}