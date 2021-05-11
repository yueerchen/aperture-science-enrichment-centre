import React from "react";
import { fetchResponse } from "../../api/dataService";
import { isLogin } from "../../api/auth";
import jwt from "jwt-decode";
import moment from "moment";

export default class Submissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, testSubmissions: [] };
  }

  componentDidMount() {
    if (!isLogin()) {
      return;
    }
    const user = jwt(localStorage.jwt_token).username;
    fetchResponse(localStorage.jwt_token, user)
      .then(testSubmissions =>
        this.setState({ isLoading: false, testSubmissions })
      )
      .catch(error => this.setState({ isLoading: false, error: error }));
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    if (this.state.testSubmissions.length < 1) {
      return (
        <div className="App d-flex flex-column align-items-center">
          <h1>No Result Found</h1>
        </div>
      );
    }
    return (
      <div className="App d-flex flex-column align-items-center">
        <h1>Test Submission History</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Submit Date</th>
              <th scope="col">Response</th>
            </tr>
          </thead>
          <tbody>
            {this.state.testSubmissions.map(submission => {
              return (
                <tr>
                  <th scope="row">
                    {moment(submission.Date).format("MMMM Do YYYY, h:mm:ss a")}
                  </th>
                  <td>
                    {submission.Responses.map(response => {
                      return `${response.Id}. ${response.Value} |`;
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
