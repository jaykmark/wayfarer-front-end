// External Modules
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from './Modal/Modal'

class Navbar  extends Component {

  render () {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">WAYFARER</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ml-auto">
                {!this.props.currentUser ? 
                <>
                  <li className="nav-item">
                    <NavLink id="register" className="nav-link" data-toggle="modal" data-target="#exampleModal" to='/register'>Register</NavLink>
                  </li>
                  <li>
                  <NavLink id="login" className="nav-link" data-toggle="modal" data-target="#exampleModal2" to="/login">Login</NavLink>
                  </li>
                </> : 
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" exact to="/cities">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink data-toggle="modal" onClick={this.props.logout} className="nav-link" to="/">Logout</NavLink>
                    </li>
                  </>
                }
              </ul>
              <Modal currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
            </div>
          </div>
        </nav>
      </header>
    );
  };
};

export default Navbar;