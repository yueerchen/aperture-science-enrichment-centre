// import axios from 'axios';
import React from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { getAliveSubjects, addSubject } from "../../api/dataService";

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      testChamber: "",
      dob: "",
      password: "",
      message: "",
      showMessage: false,
      aliveNum: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getAliveSubjects()
      .then(aliveNum => this.setState({ aliveNum }))
      .catch(error => this.setState({ isFetching: false, error: error }));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.aliveNum > 10) {
      this.setState({
        message: "No more than 10 subjects can be alive at the same time",
        showMessage: true
      });
      return;
    }
    const data = {
      SubjectId: this.state.id,
      Username: this.state.username,
      TestChamber: this.state.testChamber,
      DateOfBirth: this.state.dob,
      TotalScore: 0,
      Alive: true,
      Password: this.state.password,
      id: this.state.id
    };
    addSubject(data).then(res => {
      if (res.status === 201) {
        this.setState({
          message: "register success",
          showMessage: true
        });
      } else {
        this.setState({
          message: "Some error",
          showMessage: true
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="SubjectId">
              <Form.Label>SubjectId</Form.Label>
              <Form.Control
                required
                value={this.state.id}
                onChange={e => this.setState({ id: e.target.value })}
                type="text"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
                type="text"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="TestChamber">
              <Form.Label>TestChamber</Form.Label>
              <Form.Control
                required
                value={this.state.testChamber}
                onChange={e => this.setState({ testChamber: e.target.value })}
                type="text"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="DateOfBirth">
              <Form.Label>DateOfBirth</Form.Label>
              <Form.Control
                required
                value={this.state.dob}
                onChange={e => this.setState({ dob: e.target.value })}
                type="text"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
              />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Alert
          variant="success"
          transition={false}
          show={this.state.showMessage}
        >
          {this.state.message}
        </Alert>
      </div>
    );
  }
}
