import React from "react";
import Form from "react-bootstrap/Form";

export default class BooleanSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.data.Label}</Form.Label>
        <Form.Control
          required={this.props.data.Required}
          as="select"
          id={this.props.data.Id}
          onChange={e => this.props.onChange(e)}
        >
          <option value=""></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Control>
      </Form.Group>
    );
  }
}
