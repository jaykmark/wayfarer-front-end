import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      this.setState({
        name: '',
        username: '',
        email: '',
        password: '',
        password2: '',
      });
      this.props.history.push('/login');
    })
    .catch((err) => console.log(err))

  };

  render() {
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              type="text"
              id="Username"
              name="username"
              value={this.state.username}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              type="password"
              id="password2"
              name="password2"
              value={this.state.password2}
              required
            />
          </div>
          <button data-dismiss="modal" onClick={this.handleSubmit} className="btn btn-primary float-right" type="submit">
            Register
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(Register);
