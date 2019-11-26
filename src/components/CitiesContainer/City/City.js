import React from "react";

class City extends React.Component {
  render() {
    let link = `${this.props.cityData._id}`;
    const { cityData } = this.props;
    return (
      <>
        <h3
          className="city-item"
          id={`${this.props.cityData._id}`}
          onClick={this.props.setCurrentCity}
          key={this.props.cityData.id}
        >
          {cityData.name}
        </h3>
      </>
    );
  }
}
export default City;
