// External Modules
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Internal Modules
import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';
import video2 from "./components/CitiesContainer/assets/gardenVideo.mp4";

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
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  
  render () {
    return (
      <>
        <video autoPlay={true} loop={true} className="myVideo">
          <source src={video2} type="video/mp4" />
        </video>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout}/>
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </>
    );
  };
};

export default withRouter(App);