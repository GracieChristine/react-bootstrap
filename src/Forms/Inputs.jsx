import React, {Component} from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  Glyphicon,
  Button,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

class Inputs extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text"/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormControl type="text"/>
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="text"/>
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <FormControl type="text"/>
              <InputGroup.Addon>
                <Glyphicon glyph="music"/>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button>Before</Button>
              </InputGroup.Button>
              <FormControl type="text"/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormControl type="text"/>
              <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title="Action">
                <MenuItem key="1">Item</MenuItem>
              </DropdownButton>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <input type="radio" aria-label="..."/>
              </InputGroup.Addon>
              <FormControl type="text"/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <input type="checkbox" aria-label="..."/>
              </InputGroup.Addon>
              <FormControl type="text"/>
            </InputGroup>
          </FormGroup>
        </Form>
        <br/>
        <br/>
        <Form>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Large text"/>
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Normal text"/>
          </FormGroup>
          <FormGroup bsSize="small">
            <FormControl type="text" placeholder="Small text"/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Inputs;
