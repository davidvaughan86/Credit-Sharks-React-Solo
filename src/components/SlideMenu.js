import {stack as Menu } from 'react-burger-menu'
import React from 'react'

class SlideMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="signIn" className="menu-item" href="/signIn">Sign In</a>
        <a id="packages" className="menu-item" href="/packages">Packages</a>
        <a id="reviews" className="menu-item" href="/reviews">Reviews</a>
        <a id="partnerships" className="menu-item" href="/partnerships">Partnerships</a>
        <a id="about" className="menu-item" href="/about">About Us</a>
        
      </Menu>
    );
  }
}
export default SlideMenu