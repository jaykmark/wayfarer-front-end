import React from "react";
import axios from "axios";

import CityDetail from "./CityDetail/CityDetail";
import PostsContainer from '../../PostsContainer/PostsContainer';

class CityDetailContainer extends React.Component {
  state = {
    cityDetails: "",
    selectedCity: this.props.selectedCity,
    loaded: false,
    posts: [],
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/cities/5dd838c8bf657372e1ce0e12`, {
      withCredentials: true
    })
    .then((res) => {
      this.setState({
        cityDetails: res.data.data,
        loaded: true,
      })
    })
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCity !== this.props.selectedCity) {
      axios.get(`${process.env.REACT_APP_API_URL}/cities/${this.props.selectedCity}`, {
        withCredentials: true 
      })
        .then((res) => {
          this.setState({
            cityDetails: res.data.data,
            loaded: true,
          })
        })
        .catch((err) => console.log(err));
    }
  }
  
  render() {
    return (
      <div className=" city-detail-container">
      {this.state.cityDetails && <CityDetail cityDetails={this.state.cityDetails} />}
        {this.state.cityDetails && <PostsContainer posts={this.state.cityDetails.posts} cityDetails={this.state.cityDetails} currentUser={this.props.currentUser} />}
      </div>
    );
  }
}


export default CityDetailContainer;
