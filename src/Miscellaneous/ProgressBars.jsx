import React, {Component} from "react";
import {ProgressBar} from "react-bootstrap";

class ProgressBars extends Component {

  render() {

    const now = 85;

    return (
      <div>
        <ProgressBar now={60}/>
        <br/>
        <br/>
        <ProgressBar now={now} label={`${now}%`}/>
        <br/>
        <br/>
        <ProgressBar now={now} label={`${now}%`} srOnly/>
        <br/>
        <br/>
        <ProgressBar bsStyle="success" now={40}/>
        <ProgressBar bsStyle="info" now={20}/>
        <ProgressBar bsStyle="warning" now={60}/>
        <ProgressBar bsStyle="danger" now={80}/>
        <br/>
        <br/>
        <ProgressBar striped bsStyle="success" now={40}/>
        <ProgressBar striped bsStyle="info" now={20}/>
        <ProgressBar striped bsStyle="warning" now={60}/>
        <ProgressBar striped bsStyle="danger" now={80}/>
        <br/>
        <br/>
        <ProgressBar active now={45}/>
        <br/>
        <br/>
        <ProgressBar>
          <ProgressBar striped bsStyle="success" now={35} key={1}/>
          <ProgressBar bsStyle="warning" now={20} key={2}/>
          <ProgressBar active bsStyle="danger" now={10} key={3}/>
        </ProgressBar>
      </div>
    )
  }

}

export default ProgressBars;
