import React from "react";
import { Link } from "react-router-dom";
import EditPost from "./EditPost/EditPost";
import "../../ProfileContainer/Profile.css";

const Post = props => {
  let link = `posts/${props.postData._id}`;
  return (
    <div className="profile-posts-container">
      <hr />
      <Link className="profile-posts-content" to={link}>
        {props.postData.title}
      </Link>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-toggle="modal"
        data-target="#exampleModalPro"
      >
        Edit
      </button>
      {/* <!-- Modal --> */}
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
                Edit Post
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
              {props.postData && (
                <EditPost
                  handlePostEdit={props.handlePostEdit}
                  postData={props.postData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Post;
