import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {MenuItems} from ".//MenuItems";

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };


  changeActive = (hash) => {
   
    window.location.assign('http://localhost:3000/'+hash)
    console.log(window.location);
  };


  render() {
    
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            {MenuItems.map((item,index) => 
            {
                return (
                    <li className="nav-item"> 
                        <Link activeClass="active"
                                to={item.title} 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={item.title} href={item.url}
                                onClick={e => this.changeActive(item.url)}>
                                    {item.title} 
                        </Link> 
                    </li>)
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;



