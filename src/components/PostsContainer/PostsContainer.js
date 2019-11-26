import React from 'react';
// import axios from 'axios';

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
        console.log(res)
        const filtered = this.state.posts.filter(post => {
          if(post._id !== res.data.data._id) {
            return post
          }
        })
        this.setState({
          posts: [res.data.data,...filtered].sort((a,b) => new Date(b.date) - new Date(a.date))
        })
        document.getElementById(`exampleModalPost${postId}`).style.display = 'none';
        document.getElementsByClassName('modal-backdrop')[0].remove()
      })
      .catch((err) => console.log(err));
  };

  deletePost = (event, deletedPost) => {
    let postId =`${deletedPost.id}`
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/deletePost/${postId}`, { withCredentials: true })
    .then((res) => {
      console.log(res)
      const filtered = this.state.posts.filter(post => {
        if(post._id !== res.data.data._id) {
          return post
        }
      })
      this.setState({
        posts: [...filtered]
      })
      document.getElementsByClassName('modal-backdrop')[0].remove();
    })
    .catch((err) => console.log(err));
  }

  displayPosts = (posts) => {
    return posts.map((post) => {
      return (
        <Post key={post._id} postData={post} handlePostEdit={this.handlePostEdit} deletePost={this.deletePost}/>
      )
    })
  };


  render() {
    console.log(this.props.posts)
    return (
      <>
        {this.props.cityDetails && <CreatePostForm handleSubmit={this.handleSubmit} cityDetails={this.props.cityDetails} /> }
        {this.displayPosts(this.state.posts)}
      </>
    )
  }
}

export default PostsContainer;