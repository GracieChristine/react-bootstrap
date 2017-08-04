import React, {Component} from "react";
import {Label} from "react-bootstrap";

class Labels extends Component {
  render() {
    return (
      <div>
        <h1>Label &nbsp;&nbsp;
          <Label>New</Label>
        </h1>
        <h2>Label  &nbsp;&nbsp;
          <Label>New</Label>
        </h2>
        <h3>Label  &nbsp;&nbsp;
          <Label>New</Label>
        </h3>
        <h4>Label  &nbsp;&nbsp;
          <Label>New</Label>
        </h4>
        <h5>Label  &nbsp;&nbsp;
          <Label>New</Label>
        </h5>
        <p>Label  &nbsp;&nbsp;
          <Label>New</Label>
        </p>
        <br/>
        <br/>
        <Label bsStyle="default">Default</Label>&nbsp;
        <Label bsStyle="primary">Primary</Label>&nbsp;
        <Label bsStyle="success">Success</Label>&nbsp;
        <Label bsStyle="info">Info</Label>&nbsp;
        <Label bsStyle="warning">Warning</Label>&nbsp;
        <Label bsStyle="danger">Danger</Label>
      </div>
    )
  }
}

export default Labels;
