import React from 'react';

class confirmDelete extends React.Component {
  state = {
    id: this.props.postData._id,
    title: this.props.postData.title

  }
  render() {
    return (
      <div className="container">
        <form>
          <button data-dismiss="modal" onClick={(event) => this.props.deletePost(event, this.state)} type="submit" className="btn btn-primary float-right">Yes</button>
          <button 
            type="button" 
            className="btn btn-primary float-right"                
            data-dismiss="modal"
            aria-label="Close">No</button>
        </form>
      </div>
    )
  }
}

export default confirmDelete;