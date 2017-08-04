import React, {Component} from "react";
import {Media} from "react-bootstrap";

class MediaObjects extends Component {
  render() {
    return (
      <div>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="http://www.hdwallpapers.in/walls/emma_watson_2015-wide.jpg" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="http://www.shortday.in/wp-content/uploads/2015/08/Emma-Watson-hd-images.jpg" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <Media>
              <Media.Left>
                <img width={64} height={64} src="http://cutehotpics.com/wp-content/gallery/Emma-Watson/Emma-Watson-Wallpaper-7.jpg" alt="Image"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Nested Media Heading</Media.Heading>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </Media.Body>
            </Media>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
          <Media.Right>
            <img width={64} height={64} src="http://www.hdwallpapers.in/walls/emma_watson_2015-wide.jpg" alt="Image"/>
          </Media.Right>
        </Media>
        <Media>
          <Media.Left>
            <img width={64} height={64} src="http://www.shortday.in/wp-content/uploads/2015/08/Emma-Watson-hd-images.jpg" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
          <Media.Right>
            <img width={64} height={64} src="http://cutehotpics.com/wp-content/gallery/Emma-Watson/Emma-Watson-Wallpaper-7.jpg" alt="Image"/>
          </Media.Right>
        </Media>
        <br/>
        <br/>
        <Media>
          <Media.Left align="top">
            <img width={64} height={64} src="https://images.alphacoders.com/467/467060.jpg" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Top aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="middle">
            <img width={64} height={64} src="https://images.alphacoders.com/467/467060.jpg" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Middle aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Left align="bottom">
            <img width={64} height={64} src="https://images.alphacoders.com/467/467060.jpg" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Bottom aligned media</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </Media.Body>
        </Media>
        <br/>
        <br/>
        <Media.List>
          <Media.ListItem>
            <Media.Left>
              <img width={64} height={64} src="http://s3.zerochan.net/Eve.%28Black.Cat%29.240.142528.jpg" alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>Media heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

              <Media>
                <Media.Left>
                  <img width={64} height={64} src="http://s3.zerochan.net/Eve.%28Black.Cat%29.240.142528.jpg" alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Nested media heading</Media.Heading>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src="http://s3.zerochan.net/Eve.%28Black.Cat%29.240.142528.jpg" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>Nested media heading</Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                    </Media.Body>
                  </Media>
                </Media.Body>
              </Media>

              <Media>
                <Media.Left>
                  <img width={64} height={64} src="http://s3.zerochan.net/Eve.%28Black.Cat%29.240.142528.jpg" alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Nested media heading</Media.Heading>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </Media.Body>
              </Media>
            </Media.Body>
          </Media.ListItem>
        </Media.List>
      </div>
    )
  }
}

export default MediaObjects;
