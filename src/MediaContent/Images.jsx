import React, {Component} from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";

class Images extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src="http://lorempixel.com/200/200/nature" rounded/>
            </Col>
            <Col xs={6} md={4}>
              <Image src="http://lorempixel.com/200/200/abstract" circle/>
            </Col>
            <Col xs={6} md={4}>
              <Image src="http://lorempixel.com/200/200/animals" thumbnail/>
            </Col>
          </Row>
        </Grid>
        <br />
        <br />
        <Image src="http://lorempixel.com/200/200/food" responsive />
      </div>
    )
  }
}

export default Images;
