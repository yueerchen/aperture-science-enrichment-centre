import React from "react";
import Form from "react-bootstrap/Form";

export default class SelectQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 1 ,title: "Some question here" };
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>{this.state.title}</Form.Label>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Form.Group>
    );
  }
}
