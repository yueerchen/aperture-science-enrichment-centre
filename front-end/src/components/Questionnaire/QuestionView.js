// import axios from 'axios';
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SelectQuestion from "./SelectQuestion";
import TextQuestion from "./TextQuestion";
import BooleanSelect from "./BooleanSelect";
import { fetchQuestions } from "../../api/dataService";
import { isLogin } from "../../api/auth";

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    // console.log(isLogin() ? fetchQuestions() : null);
    return (
      <Form>
        <TextQuestion />
        <SelectQuestion />
        <BooleanSelect />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
