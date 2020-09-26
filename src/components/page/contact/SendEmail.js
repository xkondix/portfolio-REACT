import React , {Component} from 'react';
import { MDBContainer, MDBInputGroup, MDBBtn } from "mdbreact";
import './SendEmail.css'


export default class SendEmail extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email2:'',
          message:'',
          topic:''
        };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   
  
    handleChange = (evt,field) => {
      this.setState({ [field]: evt.target.value });  }
  
    handleSubmit(event) {


    console.log(this.state)
    fetch('https://portfolio98kk.herokuapp.com/api/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({
      email: this.state.email2,
      message: this.state.message,
      topic: this.state.topic
    })
  })

      
    }
  
    render() {
      return (
        
        <div className="emailDiv">
        <MDBContainer >
        <MDBInputGroup containerClassName="mb-3" prepend="Topic" hint="Topic" defaultValue={this.state.topic} onChange={(event)=>this.handleChange(event, "topic")} />
        <MDBInputGroup containerClassName="mb-3" prepend="Email" type='email' hint="Email" defaultValue={this.state.email2} onChange={(event)=>this.handleChange(event, "email2")} />
        <MDBInputGroup containerClassName="mb-3" prepend="Message" type="textarea" defaultValue={this.state.message} onChange={(event)=>this.handleChange(event, "message")}  />
        <button  onClick={this.handleSubmit}>SEND</button>
        </MDBContainer>

        </div>

   


   

    );
  }

}