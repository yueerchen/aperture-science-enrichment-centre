import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SelectQuestion from "./SelectQuestion";
import TextQuestion from "./TextQuestion";
import BooleanSelect from "./BooleanSelect";
import { fetchQuestions, addResponse } from "../../api/dataService";
import { isLogin } from "../../api/auth";
import jwt from "jwt-decode";
import moment from "moment";

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, questions: [], isLoading: true, responses: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setResponse = this.setResponse.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const decoded = jwt(localStorage.jwt_token);
    const date = moment()
      .utc()
      .format();
    const result = {
      Date: date,
      SubjectId: decoded.username,
      Responses: this.state.responses
    };
    addResponse(result)
      .then(res => {
        if (res) {
          alert("Submit successfully");
        }
      })
      .catch(error => alert(error));
  }

  componentWillMount() {
    if (!isLogin()) {
      return;
    }
    fetchQuestions(localStorage.jwt_token)
      .then(questions => this.setState({ isLoading: false, questions }))
      .catch(error => this.setState({ isLoading: false, error: error }));
  }

  setResponse(event) {
    event.preventDefault();
    let existItem = this.state.responses.find(
      ele => ele.Id === event.target.id
    );
    if (existItem) {
      existItem.Value = event.target.value;
    } else {
      this.setState({
        responses: [
          ...this.state.responses,
          { Id: event.target.id, Value: event.target.value }
        ]
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <div className="App d-flex flex-column align-items-center">
        <h1>Fulfill your questionnaire:</h1>
        <Form style={{ width: "300px" }} onSubmit={e => this.handleSubmit(e)}>
          {this.state.questions.map(question => {
            if (question.Type === "select") {
              return (
                <SelectQuestion data={question} onChange={this.setResponse} />
              );
            } else if (question.Type === "text") {
              return (
                <TextQuestion data={question} onChange={this.setResponse} />
              );
            } else if (question.Type === "boolean") {
              return (
                <BooleanSelect data={question} onChange={this.setResponse} />
              );
            } else {
              return null;
            }
          })}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
