import React from "react";
import Form from "react-bootstrap/Form";

export default class TextQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.data.Label}</Form.Label>
        <Form.Control
          as="textarea"
          id={this.props.data.Id}
          required={this.props.data.Required}
          onChange={e => this.props.onChange(e)}
        />
      </Form.Group>
    );
  }
}
