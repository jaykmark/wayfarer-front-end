import React from "react";
import UpdateProfile from "../Profile/EditProfile/UpdateProfile";

const Profile = (props) => {
  const dateJoined = props.profile.createdAt;

  return (
    <>
      <div className="profile-info-container">
          <h2>Hey, { props.profile.name }. Welcome back!</h2>
          <img
            className="profile-page-photo"
            src={ props.profile.profilePhoto }
            alt={ props.profile.name + `'s profile picture` }
          />
          <h5>Current City: { props.profile.currentCity }</h5>
          <h6>Date Joined: { dateJoined.substring(0,10) }</h6>

        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-success btn-sm"
          data-toggle="modal"
          data-target="#exampleModalPro"
        >
          Update Profile
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModalPro"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Update Profile Here
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <UpdateProfile
              handleUpdate={props.handleUpdate}
              profile={props.profile}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Profile;
