import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { logout, isLogin, isGLaDOS, isSubject } from "../../api/auth";
import jwt from "jwt-decode";

const UserDropdown = withRouter(props => {
  const decoded = jwt(localStorage.jwt_token);
  return (
    <li className="dropdown">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-expanded="false"
      >
        {decoded.role} <span className="caret" />{" "}
      </a>
      <ul className="dropdown-menu">
        {isSubject() && (
          <li>
            <Link to="/newTesting">New Testing</Link>
          </li>
        )}
        {isSubject() && (
          <li>
            <Link to="/history">Testing History</Link>
          </li>
        )}
        {isGLaDOS() && (
          <li>
            <Link to="/edit">Edit Questionnaire</Link>
          </li>
        )}
        {isGLaDOS() && (
          <li>
            <Link to="/subjects">View Subjects</Link>
          </li>
        )}
        <li>
          <a
            onClick={e => {
              e.preventDefault();
              logout();
              props.history.replace("/signin");
            }}
          >
            Log out
          </a>
        </li>
      </ul>
    </li>
  );
});

const DropDown = withRouter(UserDropdown);

export default class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top jr-top-nav">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              <img src={logo} style={{ height: 40 }} alt="logo" />
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              {isLogin() ? (
                <UserDropdown />
              ) : (
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
