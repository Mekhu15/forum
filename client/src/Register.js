import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { Link, withRouter } from 'react-router-dom'

class Register extends Component {
  constructor(props)
  {
    super(props);
  this.state = {
       }
  }

  render()
{
  
  return (
     <div class = "conatiner">
      <form onSubmit={(e)=>this.handleSubmit(e,this.state.id)} className="add">
     <h5>Registration</h5><br/>
       <p> <label>
          Name:<br/>
          <input type="text" placeholder="Name" className="form-control" name ="name" value={this.state.name} onChange={this.handleChange} required/>
        </label></p>
        <p><label>
          Email:<br/>
          <input type="email" placeholder="abc@gmail.com"  className="form-control" name = "email" value={this.state.email} onChange={this.handleChange} required/>
        </label></p>
        <p><label>
          password:<br/>
          <input type="password" placeholder="password"  className="form-control" name = "password" value={this.state.email} onChange={this.handleChange} required/>
        </label></p>
        <p><label>
          Confirm password:<br/>
          <input type="password" placeholder="same as password"  className="form-control" name = "confirm" value={this.state.email} onChange={this.handleChange} required/>
        </label></p>
        <p><input type="submit" value="Register"  className="btn btn-success"/></p>
      </form>
   </div>
  );   
} 
}
export default Register;
