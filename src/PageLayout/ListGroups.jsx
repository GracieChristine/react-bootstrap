import React, {Component} from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";

class ListGroups extends Component {

  render() {

    function alertClicked() {
      alert('You clicked the third ListGroupItem');
    }

    return (
      <div>
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>...</ListGroupItem>
        </ListGroup>
        <br/>
        <br/>
        <ListGroup>
          <ListGroupItem href="#link1">Link 1</ListGroupItem>
          <ListGroupItem href="#link2">Link 2</ListGroupItem>
          <ListGroupItem onClick={alertClicked}>
            Trigger an alert
          </ListGroupItem>
        </ListGroup>
        <br/>
        <br/>
        <ListGroup>
          <ListGroupItem href="#" active>Link 1</ListGroupItem>
          <ListGroupItem href="#">Link 2</ListGroupItem>
          <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
        </ListGroup>
        <br/>
        <br/>
        <ListGroup>
          <ListGroupItem bsStyle="success">Success</ListGroupItem>
          <ListGroupItem bsStyle="info">Info</ListGroupItem>
          <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
          <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
        </ListGroup>
        <br/>
        <br/>
        <ListGroup>
          <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
          <ListGroupItem header="Heading 2" href="#">Linked item</ListGroupItem>
          <ListGroupItem header="Heading 3" bsStyle="danger">Danger styling</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default ListGroups;
