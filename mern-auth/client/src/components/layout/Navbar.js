import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Navbar extends Component {

   onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
     const  user  = this.props.auth.isAuthenticated;
    return (
      <div className="navbar-fixed">
       <nav className="navbar navbar-expand-lg " style={{backgroundColor: "black"}}>
            <div >
              <ul className="navbar-nav">
              <li>
              <Link to="/" className="navbar-brand">Forget It</Link>
              </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Create Todo</Link>
                </li>
              </ul>
              { user ?
                <ul className="right show-on-med-and-down" style={{marginRight: 12, cursor:'pointer'}}>
                  <li  onClick={this.onLogoutClick}>
                    <span>Logout</span>
                  </li>
                </ul>
                : 
                ''
                }
            </div>
          </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
