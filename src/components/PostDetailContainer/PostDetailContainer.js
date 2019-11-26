import React from 'react';
import axios from 'axios';

import PostDetail from './PostDetail/PostDetail.js';

class PostDetailContainer extends React.Component {
  state = {
    postDetail: null,
    loaded: false,
  };

  componentDidMount() {
    const postId = document.location.href.split('/')[4];
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}`, { withCredentials: true })
      .then((res) => {
        this.setState({
          postDetail: res.data.data,
          loaded: true,
        })
      })
      .catch((err) => console.log(err));
  };

  render() {
    
    return (
      <div className="container">
        {this.state.postDetail && <PostDetail postDetail={this.state.postDetail} />}
      </div>
    ) 
  }
}

export default PostDetailContainer;