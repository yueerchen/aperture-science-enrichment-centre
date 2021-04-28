import React from "react";
import Form from "react-bootstrap/Form";

export default class BooleanSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Like or not?" };
  }
  render() {
    return (
      <Form.Group>
        <Form.Label>{this.state.title}</Form.Label>
        <Form.Check type="radio" label="true" name="true" id="true" />
        <Form.Check type="radio" label="false" name="false" id="false" />
      </Form.Group>
    );
  }
}
