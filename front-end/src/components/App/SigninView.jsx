import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { LoadingButton } from "../UI/Button";
import { login } from "../../api/auth";

class SigninView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const { location } = this.props;

    this.setState({ isFetching: true });
    login(username, password).then(token => {
      this.setState({ isFetching: false });
      this.props.history.push(location.state ? location.state.from : "/");
    });
  };

  render() {
    const { isFetching, username, password } = this.state;
    return (
      <div className="container">
        <form className="jr-form-signin" onSubmit={this.handleSubmit}>
          <label htmlFor="inputUsername" className="sr-only">
            Username
          </label>
          <input
            name="username"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Password"
            required
          />

          <LoadingButton
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            loading={isFetching}
          >
            Sign in
          </LoadingButton>
        </form>
      </div>
    );
  }
}

export default withRouter(SigninView);
