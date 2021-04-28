import React from "react";
import Form from "react-bootstrap/Form";

export default class TextQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element."
    };
  }

  render() {
    return (
      <Form.Group controlId="formGridAddress2">
        <Form.Label>{this.state.value}</Form.Label>
        <Form.Control />
      </Form.Group>
    );
  }
}
