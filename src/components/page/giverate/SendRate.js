import React , {Component} from 'react';
import { MDBContainer, MDBInputGroup, MDBBtn } from "mdbreact";
import './SendRate.css'

export default class SendRate extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          email:'',
          comment:'',
          company:''
        };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   
  
    handleChange = (evt,field) => {
      this.setState({ [field]: evt.target.value });  }
  
    handleSubmit(event) {


    console.log(this.state)
    fetch('https://portfolio98kk.herokuapp.com/api/data', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment,
      company: this.state.company
    })
  })

      
    }
  
    render() {
      return (
        
        <div className="layout">
        <MDBContainer >
        <MDBInputGroup containerClassName="mb-3" prepend="Name" hint="Nick or Name" defaultValue={this.state.name} onChange={(event)=>this.handleChange(event, "name")} />
        <MDBInputGroup containerClassName="mb-3" prepend="Email" type='email' hint="Email" defaultValue={this.state.email} onChange={(event)=>this.handleChange(event, "email")} />
        <MDBInputGroup containerClassName="mb-3" prepend="Company" hint="It is not necessary" defaultValue={this.state.company} onChange={(event)=>this.handleChange(event, "company")} /> 
        <MDBInputGroup containerClassName="mb-3" prepend="Comment" type="textarea" defaultValue={this.state.comment} onChange={(event)=>this.handleChange(event, "comment")}  />
        <button  onClick={this.handleSubmit}>SEND</button>
               </MDBContainer>

        </div>

   


   

    );
  }

}
 