import React, {Component} from "react";
import {Grid, Row, Col, Thumbnail, Button} from "react-bootstrap";

class Thumbnails extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="http://lorempixel.com/400/200"/>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="http://lorempixel.com/400/200"/>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="http://lorempixel.com/400/200"/>
            </Col>
          </Row>
        </Grid>
        <br/>
        <br/>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="http://lorempixel.com/400/200" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://lorempixel.com/400/200" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="http://lorempixel.com/400/200" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default Thumbnails;
