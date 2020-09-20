import React,{ Component } from "react";
import { Pager } from "react-bootstrap";
import {Information} from "./Information";
import Content from './Content'
import './Pager.css'

export default class PagerComponent extends Component
{

    constructor(props) {
        super(props);
        
        this.state = { 
          currentPage: 0,
          show: true, 
          navbar :
          {
            0 : true,
            1 : false,
            2 : false,
            3 : false,
            4 : false,
            5 : false,
          },
          
        }
    }

getPagesNumbers = () => {
    const pageNumbers = [];

    
    Information.map((item,index) => 
            {
              pageNumbers.push(
                <Pager.Item key={index} eventKey={index} className={this.state.navbar[index] ? "nav-item-active-two" : "nav-item-two"} onSelect={this.handlePageChange}>
                  {item.title}
                </Pager.Item>,
              );
            })

    return [...pageNumbers];
  };

  handlePageChange = number => {


    this.state.navbar[this.state.currentPage] = false;
    this.forceUpdate()

    this.setState({ currentPage: number });

    this.state.navbar[number] = true;
    this.forceUpdate()


  }

 
  render () {

    const pagesNumbers = this.getPagesNumbers();
    

  return (

    <div className="wrap">


   <Pager>
      {pagesNumbers} 
  </Pager>

  <div className="wrap2">

    <Content
    title ={Information[this.state.currentPage].title }
    src = {Information[this.state.currentPage].src }
    link = {Information[this.state.currentPage].link }
    content = {Information[this.state.currentPage].describe}

    />

    </div>

    </div>

  
    

     );
    }   


}