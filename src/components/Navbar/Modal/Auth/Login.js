import React, { Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

class  Login extends Component {

  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }); 
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      this.props.setCurrentUser(res.data.data);
      this.props.history.push('/cities');
    })
    .catch((err) => console.log(err));
  }

  render () {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="userName" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="Password" name="password" />
              </div>
              <button data-dismiss="modal" onClick={this.handleSubmit} className="btn btn-primary float-right" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    ); 
  };
};

export default withRouter(Login);