import React from "react";
import axios from "axios";

import Profile from "./Profile/Profile";
import PostsContainer from "../PostsContainer/PostsContainer";

class ProfileContainer extends React.Component {
  state = {
    loaded: false,
    profile: {}
  };

  componentDidMount() {
    const userId = localStorage.getItem("uid");
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/${userId}`, {
        withCredentials: true
      })
      .then(res => {
        this.setState({
          profile: res.data.data,
          loaded: true
        });
      })
      .catch(err => console.log(err));
  }

  handleUpdate = (event, updatedState) => {
    event.preventDefault();
    const userId = localStorage.getItem("uid");
    const data = new FormData();
    data.append("file", this.state.profilePhoto);
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/auth/update/${userId}`,
        updatedState,
        {
          withCredentials: true
        }
      )
      .then(res => {
        this.setState({
          profile: res.data.data
        });
        document.getElementById("exampleModalPro").style.display = "none";
        document.getElementsByClassName("modal-backdrop")[0].remove();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div className="profile-container">
          {this.state.loaded && (
            <Profile
              profile={this.state.profile}
              handleUpdate={this.handleUpdate}
            />
          )}
            {this.state.loaded && 
              <PostsContainer posts={this.state.profile.posts} />
            }
        </div>
    );
  }
}

export default ProfileContainer;
