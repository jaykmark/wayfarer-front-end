import React from "react";

import CreatePostForm from './CreatePostForm/CreatePostForm';
import PostsContainer from '../../../PostsContainer/PostsContainer';

const CityDetail = props => {

  return (
    <div className="city-detail-box">
      <div className="col col-md-4">
        <h1 className="city-detail-name">{props.cityDetails.name}</h1>
        <p className="city-detail-description">{props.cityDetails.description}</p>
      </div>
      <div className="col col-md-8">
        <img className=" city-detail-image " src={props.cityDetails.photo} alt={props.cityDetails.name} />
      </div>
    </div>
  );
};

export default CityDetail;
