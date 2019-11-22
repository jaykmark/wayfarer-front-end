// External Modules
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Internal Modules
import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';

// CSS
import './App.css';
import axios from 'axios';


class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    localStorage.removeItem('uid');
    axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
        localStorage.removeItem('uid');
        this.props.history.push('/home');
      })
      .catch(err => console.log(err));
  }
  
  render () {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout}/>
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </>
    );
  };
};

export default withRouter(App);