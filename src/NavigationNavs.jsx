import React, {Component} from "react";
import {Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

function handleSelect2(eventKey) {
  event.preventDefault();
  alert(`selected ${eventKey}`);
}

class NavigationNavs extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
        <br/>
        <br/>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect2}>
          <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <br/>
        <br/>
        <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
        <br/>
        <br/>
        <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
        <br />
        <Nav bsStyle="pills" justified activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
      </div>
    )
  }
}

export default NavigationNavs;
