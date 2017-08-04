import React, {Component} from "react";
import {Form, FormGroup, ControlLabel, FormControl, Button, Col, Checkbox} from "react-bootstrap";

class Layouts extends Component {
  render() {
    return (
      <div>
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Jane Doe"/>
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="jane.doe@example.com"/>
          </FormGroup>
          {' '}
          <Button type="submit">
            Send invitation
          </Button>
        </Form>
        <br/>
        <br/>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Layouts;
