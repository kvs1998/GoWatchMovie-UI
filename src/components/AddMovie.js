import React, {Component} from 'react';

export default class AddMovie extends Component {    
  render() {
    return (
      <div>
        <form>'
          <h1>ADD MOVIES</h1>
          <div className="form-group">
            <label for="exampleInputName2">Name</label>
            <input type="text" class="form-control" id="exampleInputName2" placeholder="" />
          </div>          
          <div className="form-group">
            <label for="exampleInputName2">Description</label>
            <input type="text" class="form-control" placeholder="" />
          </div>          
          <div className="form-group">
            <label for="exampleInputName2">Year</label>
            <input type="text" class="form-control" placeholder="" />
          </div>              
          <div className="form-group">
            <label for="exampleInputName2">Rating</label>
            <input type="text" class="form-control" placeholder="" />
          </div>              
          <div className="form-group">
            <label for="exampleInputName2">Mpaa Rating</label>
            <input type="text" class="form-control" placeholder="" />
          </div>              
          <div className="form-group">
            <label for="exampleInputName2">Movie Genre</label>
            <input type="text" class="form-control" placeholder="" />
          </div>      
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}