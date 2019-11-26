import React from "react";

const PostDetail = props => {
  return (
    <div className="post-detail container p-5">
      <h3 className="post-detail-title">{props.postDetail.title}</h3>
      <h4 className="post-detail-author">by {props.postDetail.author.username}</h4>
      <p className="post-detail-body">{props.postDetail.body}</p>
    </div>
  );
};

export default PostDetail;
