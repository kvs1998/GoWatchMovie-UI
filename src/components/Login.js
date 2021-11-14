import React, {Component} from 'react';

export default class Login extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            error: null,
        };    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }  

    handleChange(event) {
        this.setState((prevState) => ({
            ...prevState,
           [event.target.name]: event.target.value,
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        const { Email, Password} = this.state;
        console.log("payload",JSON.stringify({Email, Password}))
        const requestOptions = {
          method: 'POST',
          body: JSON.stringify({Email, Password})
        };
        fetch("http://localhost:4000/v1/signin", requestOptions)
            .then(response => response.json())
            .then((data)=>console.log("data", data))
            .catch(error => console.log('Form submit error', error))
    }

    render() {    
        let {Email, Password} = this.state;
        return (
            <div>   
            <form onSubmit={this.handleSubmit} className="form">
                <div className="form-group">
                    <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" 
                     aria-describedby="emailHelp" placeholder="Enter email" name="Email"
                     onChange={this.handleChange} value={Email} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control"  value={Password} name="Password"
                    id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
                </div>   
                <hr />     
                <button type="submit" className="btn btn-primary">Login</button>  
            </form>  
            </div>     
        )
    }
}