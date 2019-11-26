import React from "react";
import { Link } from "react-router-dom";
import EditPost from "./EditPost/EditPost";
import "../../ProfileContainer/Profile.css";

import ConfirmDelete from './ConfirmDelete/ConfirmDelete'

import './Post.css'

const Post = props => {
  let link = `posts/${props.postData._id}`;
  let postTitle = `${props.postData.title}`
  return (
    
    <div className="post-container" id={props.postData._id} onClick={props.setSelectedPost}>
      <hr/>
      <div className="col col-sm-6 col-md-8">
      <Link className="profile-posts-content" to={link}>
        {props.postData.title}
      </Link>
      </div>
      <div className="buttonz justify-content-end col-sm-6 col-md-4">
      { localStorage.getItem('uid')===props.postData.author && 
      <button
        type="button"
        className="btn btn-success btn-sm post-edit-button justify-content-end"
        data-toggle="modal"
        data-target={`#exampleModalPost${props.postData._id}`}
      >
        Edit
      </button>
      }
      {/* Delete */}
      { localStorage.getItem('uid')===props.postData.author && <button 
        type="button"
        className="btn btn-success btn-sm post-delete-button float-right justify-content-end"
        data-toggle="modal"
        data-target={`#deletePostModal${props.postData._id}`}>
          Delete
      </button>
}
</div>
      {/* <!-- Edit Post Modal --> */}
      <div
        className="modal fade"
        id={`exampleModalPost${props.postData._id}`}
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

      {/* <!-- Delete Post Modal --> */}
      <div
        className="modal fade"
        id={`deletePostModal${props.postData._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="deletePostModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deletePostModalLabel">
              Are you sure you want to delete "{postTitle}"?
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
                <ConfirmDelete
                  deletePost={props.deletePost}
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
