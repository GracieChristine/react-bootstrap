import React, {Component} from "react";
import {DropdownButton, MenuItem, ButtonToolbar} from "react-bootstrap";

class Dropdowns extends Component {

  render() {
    return (
      <div>
        <DropdownButton bsStyle="primary" title="Dropdown">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider/>
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
        <br/>
        <br/>
        <ButtonToolbar>
          <DropdownButton bsSize="large" title="Large button" id="dropdown-size-large">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton title="Default button" id="dropdown-size-medium">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton bsSize="small" title="Small button" id="dropdown-size-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>

        <ButtonToolbar>
          <DropdownButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <br/>
        <br/>
        <ButtonToolbar>
          <DropdownButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <br/>
        <br/>

      </div>
    )
  }
}

export default Dropdowns;
