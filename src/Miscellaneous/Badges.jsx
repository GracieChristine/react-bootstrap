import React, {Component} from "react";
import {Badge} from "react-bootstrap";

class Badges extends Component {
  render() {
    return (
      <div>
        <p>Badges
          <Badge>42</Badge>
        </p>
      </div>
    )
  }
}

export default Badges;
