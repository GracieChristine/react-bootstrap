import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Buttons extends Component {
  render() {
    return (
      <div>
        <Button bsSize="large" block bsStyle="danger">Hello World Danger</Button>
        <Button bsSize="large" block bsStyle="primary">Hello World Primary</Button>
        <Button bsSize="large" disabled bsStyle="success">Hello World Success</Button>
      </div>
    )
  }
}

export default Buttons;
