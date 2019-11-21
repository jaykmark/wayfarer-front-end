// External Modules
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Internal Modules
import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';

// CSS
import './App.css';


class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  render () {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </>
    );
  };
};

export default withRouter(App);