import React from 'react';
import Register from './Auth/Register';
import Login from './Auth/Login';

class Modal extends React.Component {
  state = {
    closeRegister: false,  
  };

  render() {
    return (
    <>
    {/* Register Modal */}
        {!this.state.closeRegister && <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Register</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
              </div>
              <div className="modal-body">
              <Register closeRegister={this.closeRegister}/>
              </div>
            </div>
          </div>
        </div>}

         {/* Login Modal */}
        <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Login currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser}/>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  };
};


export default Modal;