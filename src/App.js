import React, { Component, Fragment } from 'react';
import './App.css';

import {MenuItems} from "./components/navbar/MenuItems";
import HomePage from "./components/page/home/HomePage";
import AboutMe from "./components/page/aboutme/AboutMePage";
import Skills from "./components/page/skills/Skills";
import Projects from "./components/page/projects/Projects";
import Contact from "./components/page/contact/Contact";
import GiveMeRate from "./components/page/giverate/GiveMeRate";
import ReactPageScroller  from 'react-page-scroller'
import { Pager } from "react-bootstrap";



export default class App extends Component {


  constructor(props) {
    super(props);
    
    this.state = { 
      currentPage: 0,
      show: true,
      navbar :
      {
        0 : false,
        1 : false,
        2 : false,
        3 : false,
        4 : false,
        5 : false,

      }
     };
  }

  handlePageChange = number => {



    if(number>this.state.currentPage)
    {
      this.setState({ show: false });

    }
    else
    {

      this.setState({ show: true });

    }
  
    this.state.navbar[this.state.currentPage] = false;
    this.forceUpdate()

    this.setState({ currentPage: number });

    this.state.navbar[number] = true;
    this.forceUpdate()

    switch (number) {
      case 0:
        window.location.hash = '#home';
        break;
      case 1:
        window.location.hash = '#aboutMe';
        break;

      case 2:
        window.location.hash = '#skills';
        break;

      case 3:
        window.location.hash = '#projects';
        break;

      case 4:
        window.location.hash = '#yourOpinion';
        break;

      case 5:
        window.location.hash = '#contact';
        break;
      default:
       console.log("error");
    }
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    
    MenuItems.map((item,index) => 
            {
              pageNumbers.push(
                <Pager.Item key={index} eventKey={index} className={this.state.navbar[index] ? "nav-item-active" : "nav-item"} onSelect={this.handlePageChange}>
                  {item.name}
                </Pager.Item>,
              );
            })

    return [...pageNumbers];
  };

 

  render () {

    const pagesNumbers = this.getPagesNumbers();

  return (
    
    
    <div 
    style={
      { backgroundImage: `url(${require("./components/page/home/bacground1.jpg")})`,
      }} className="App">
      <div className={this.state.show ? "active" : "hidden"}>
          <Pager className="nav" bsSize="large">
            <div className="nav-content">
                <ul className="nav-items">
                  {pagesNumbers}
                </ul>
              </div>
        </Pager>
      </div>

         <ReactPageScroller
            pageOnChange={this.handlePageChange}
            containerWidth={window.innerWidth}
            containerHeight={window.innerHeight}
            customPageNumber={this.state.currentPage}
          >

          <HomePage 
            title={"Home"}
            id="Home">
            </HomePage>

            <AboutMe
            title={"About Me"}
            id="AboutMe"
            ></AboutMe>

            <Skills 
            title={"Skills"}
             id="Skills">
            </Skills>

            <Projects 
            title={"Projects"}
            id="Projects">
            </Projects>

            <GiveMeRate 
            title={"Your Opinion"}
            id="GiveMeRate">
            </GiveMeRate>

            <Contact
            title={"Contact"}
            id="Contact">
            </Contact>

        </ReactPageScroller>


    </div>
  );
  }
}

