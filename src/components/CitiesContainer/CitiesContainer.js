import React from "react";
import City from "./City/City";
import CityDetailContainer from "./CityDetailContainer/CityDetailContainer";
import axios from "axios";
import "./CitiesContainer.css";

class CitiesContainer extends React.Component {
  state = {
    citiesData: [],
    selectedCity: "",
    loaded: false
  };

  setCurrentCity = event => {
    this.setState({
      selectedCity: event.target.id
    });
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cities`, { withCredentials: true })
      .then(res => {
        this.setState({
          citiesData: res.data.data,
          loaded: true
        });
      })
      .catch(err => console.log(err));
  }

  displayCities = cities => {
    return cities.map(city => {
      return (
          <li>
            <City
              setCurrentCity={this.setCurrentCity}
              cityData={city}
              key={city._id}
            />
          </li>
      );
    });
  };

  render() {
    return (
      <div className=" container-fluid ">
        <div className="row">
          <div className="cities-explore col">
            <h1 className="explore">EXPLORE</h1>
          </div>
        </div>
        {/* for sidebar */}
        <div className="container">
          <div className="row">
            <div className="col col-md-3">
              <div className=" city-list p-5 row-md">
                <ul>
                  {this.displayCities(this.state.citiesData)}
                </ul>
              </div>
            </div>
            <div className=" col-md-8 col">
              <CityDetailContainer selectedCity={this.state.selectedCity} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CitiesContainer;
