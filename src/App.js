import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {MenuItems} from "./components/navbar/MenuItems";
import HomePage from "./components/page/home/HomePage";
import AboutMe from "./components/page/aboutme/AboutMePage";
import Skills from "./components/page/skills/Skills";
import Contact from "./components/page/contact/Contact";
import GiveMeRate from "./components/page/giverate/GiveMeRate";
import ReactPageScroller  from 'react-page-scroller'
import { Pager } from "react-bootstrap";



export default class App extends Component {


  constructor(props) {
    super(props);
    
    this.state = { 
      currentPage: 0,
      show: true };
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
  
    this.setState({ currentPage: number });

    switch (number) {
      case 0:
        window.location.assign('http://localhost:3000/#home')
        break;
      case 1:
        window.location.assign('http://localhost:3000/#aboutme')
        break;

      case 2:
        window.location.assign('http://localhost:3000/#skills')
        break;

      case 3:
        window.location.assign('http://localhost:3000/#judgeMe')
        break;

      case 4:
        window.location.assign('http://localhost:3000/#concact')
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
                <Pager.Item key={index} eventKey={index} className={"nav-item"} onSelect={this.handlePageChange}>
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

            <GiveMeRate 
            title={"Give Me Rate"}
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

