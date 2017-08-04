import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

class Carousels extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://c.tribune.com.pk/2017/04/1390787-annehathaway-1492846268.jpg"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://wallpapersdsc.net/wp-content/uploads/2015/12/311.jpg"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://all4desktop.com/data_images/1280%20x%201024/4223363-anne-hathaway-normal5.4.jpg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Carousels;
