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
      this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

   
  
    handleChange2 = (evt,field) => {
      this.setState({ [field]: evt.target.value });  }
  
    handleSubmit2(event) {


    console.log(this.state)
    fetch('https://portfolio98kk.herokuapp.com/api/sendEmail', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({
      topic: this.state.topic,
      message: this.state.message,
      emailRest: this.state.email2

    })
  })

      
    }
  
    render() {
      return (
        
        <div className="emailDiv">
        <MDBContainer >
        <MDBInputGroup containerClassName="mb-3" prepend="Topic" hint="Topic" defaultValue={this.state.topic} onChange={(event)=>this.handleChange2(event, "topic")} />
        <MDBInputGroup containerClassName="mb-3" prepend="Email" type='email' hint="Email" defaultValue={this.state.email2} onChange={(event)=>this.handleChange2(event, "email2")} />
        <MDBInputGroup containerClassName="mb-3" prepend="Message" type="textarea" defaultValue={this.state.message} onChange={(event)=>this.handleChange2(event, "message")}  />
        <button  onClick={this.handleSubmit2}>SEND</button>
        </MDBContainer>

        </div>

   


   

    );
  }

}