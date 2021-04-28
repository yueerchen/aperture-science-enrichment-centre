// import axios from 'axios';
import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="SubjectId">
            <Form.Label>SubjectId</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="TestChamber">
            <Form.Label>TestChamber</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="DateOfBirth">
            <Form.Label>DateOfBirth</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
