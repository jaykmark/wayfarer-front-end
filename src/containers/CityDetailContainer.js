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
  componentDidUpdate(prevProps) {
    if(prevProps.selectedCity !== this.props.selectedCity) {
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
      <section className="city-detail-container">
        <CityDetail cityDetails={this.state.cityDetails} />
        {this.state.loaded && <PostsContainer postDetails={this.state.cityDetails.posts} /> }
      </section>
    );
  }
}
export default CityDetailContainer;