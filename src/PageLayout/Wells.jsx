import React, {Component} from "react";
import {Well} from "react-bootstrap";

class Wells extends Component {

  render() {
    return (
      <div>
        <Well>Look I'm in a well!</Well>
        <Well bsSize="large">Look I'm in a large well!</Well>
        <Well bsSize="small">Look I'm in a small well!</Well>
      </div>
    )
  }
}

export default Wells;
