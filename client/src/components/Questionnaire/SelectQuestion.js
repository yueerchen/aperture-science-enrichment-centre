import React from "react";
import Form from "react-bootstrap/Form";

export default class SelectQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.data.Label}</Form.Label>
        <Form.Control
          as="select"
          id={this.props.data.Id}
          required={this.props.data.Required}
          onChange={e => this.props.onChange(e)}
        >
          <option value=""></option>
          {this.props.data.Options.map(option => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </Form.Control>
      </Form.Group>
    );
  }
}
