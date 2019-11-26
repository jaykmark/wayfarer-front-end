import React from 'react';

import Post from './Post/Post';
import CreatePostForm from '../CitiesContainer/CityDetailContainer/CityDetail/CreatePostForm/CreatePostForm';
import axios from 'axios';

class PostsContainer extends React.Component {
  state = {
    loaded: false,
    posts: [...this.props.posts].sort((a,b) => new Date(b.date) - new Date(a.date)),
    selectedPost: '',
  };

  handleSubmit = (event, createdPost) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/posts/newpost`, createdPost, { withCredentials: true })
    .then((res) => {
      let newPosts = [...this.state.posts].concat(res.data.data).sort((a,b) => new Date(b.date) - new Date(a.date))
      this.setState({
        posts: newPosts
      })
      document.getElementById(`createPostForm`).style.display = 'none';
      document.getElementsByClassName('modal-backdrop')[0].remove()
    })
    .catch((err) => console.log(err));
  }

  handlePostEdit = (event, updatedPost) => {
    let postId = `${updatedPost.id}`
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/posts/${postId}`, updatedPost, { withCredentials: true }
    )
      .then((res) => {
        const filtered = this.state.posts.filter(post => {
          if(post._id !== res.data.data._id) {
            return post
          }
        })
        this.setState({
          posts: [res.data.data,...filtered].sort((a,b) => new Date(b.date) - new Date(a.date))
        })
      })
      .catch((err) => console.log(err));
  };

  deletePost = (event, deletedPost) => {
    let postId =`${deletedPost.id}`
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/deletePost/${postId}`, { withCredentials: true })
    .then((res) => {
      const filtered = this.state.posts.filter(post => {
        if(post._id !== res.data.data._id) {
          return post
        }
      })
      this.setState({
        posts: [...filtered]
      })
      // document.getElementsByClassName('modal-backdrop')[0].remove();
      // document.getElementById(`deletePostModal${postId}`).setAttribute('data-dismiss','modal');
    })
    .catch((err) => console.log(err));
  }

  displayPosts = (posts) => {
    return posts.map((post) => {
      return (
        <div className="post" key={post._id}>
        <Post postData={post} handlePostEdit={this.handlePostEdit} deletePost={this.deletePost}/>
        </div>
      )
    })
  };

  componentDidUpdate(prevProps) {
    if (prevProps.cityDetails !== this.props.cityDetails) {
      this.setState({
        posts: this.props.cityDetails.posts
      })
    }
    }

  render() {
    return (
      <div className="profile-posts-container">
        {localStorage.getItem('uid') && this.props.cityDetails && <CreatePostForm handleSubmit={this.handleSubmit} cityDetails={this.props.cityDetails} currentUser={this.props.currentUser} /> }
        {this.displayPosts(this.state.posts)}
      </div>
    )
  }
}

export default PostsContainer;