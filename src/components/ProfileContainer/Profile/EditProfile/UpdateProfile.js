import React from 'react';
import {withRouter} from 'react-router-dom'

class UpdateProfile extends React.Component {
  state = {
    name: '',
    username: '',
    currentCity: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="username" name="username" value={this.state.username} />
          </div>
          <div className="form-group">
            <label htmlFor="currentCity">Current City</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={this.state.currentCity} />
          </div>
          <button data-dismiss="modal" onClick={(event) => this.props.handleUpdate(event, this.state)} type="submit" className="btn btn-success float-right">save</button> 
        </form>
      </div>
    )
  }
};

export default withRouter(UpdateProfile);