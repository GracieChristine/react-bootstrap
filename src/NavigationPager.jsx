import React, {Component} from "react";
import {Pager} from "react-bootstrap";

class NavigationPager extends Component {

  render() {
    return (
      <div>
        <Pager>
          <Pager.Item href="#">Previous</Pager.Item>
          {' '}
          <Pager.Item href="#">Next</Pager.Item>
        </Pager>
        <br/>
        <br/>
        <Pager>
          <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>
          <Pager.Item next href="#">Next Page &rarr;</Pager.Item>
        </Pager>
        <br/>
        <br/>
        <Pager>
          <Pager.Item previous href="#">&larr; Previous</Pager.Item>
          <Pager.Item disabled next href="#">Next &rarr;</Pager.Item>
        </Pager>
      </div>
    )
  }
}

export default NavigationPager;
