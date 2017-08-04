import React, {Component} from "react";
import {Button, Fade, Well} from "react-bootstrap";

class Fades extends Component {

  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {

    return (
      <div>
        <Button onClick={()=> this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Fade in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Fade>
      </div>
    )
  }

}

export default Fades;
