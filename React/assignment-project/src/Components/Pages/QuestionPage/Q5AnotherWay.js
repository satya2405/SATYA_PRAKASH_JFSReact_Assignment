import React, { Component} from "react";
// import Form from "react-bootstrap/Form";
import "../css/pages.css";
import "../css/question.css";

const dateForm = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

class Q5AnotherWay extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  currentTime() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.currentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="pages">
        <h1>Question No. 5</h1>
        <br />
        {/* <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Form> */}
        <div className="display-clock">
          <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
          <p id="date">
            {this.state.time.toLocaleDateString("en-IN", dateForm)}
          </p>
        </div>
      </div>
    );
  }
}

export default Q5AnotherWay;
