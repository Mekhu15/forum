import React, { Component } from 'react';
import { register } from './Function';

class Register extends Component {
  constructor(props)
  {
    super(props);
  this.state = {
     first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: {}
       }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/Signin`)
    })
  }

  render()
{
  
  return (
     <div class = "conatiner">
      <form onSubmit={(e)=>this.handleSubmit(e,this.state.id)} className="add">
     <h5>Registration</h5><br/>
       <p> <label>
          First Name:<br/>
          <input type="text" placeholder="first name" className="form-control" name ="first_name" value={this.state.first_name} onChange={this.handleChange} required/>
        </label></p>
         <p><label>
          Last Name:<br/>
          <input type="text" placeholder="last name"  className="form-control" name = "last_name" value={this.state.last_name} onChange={this.handleChange} required/>
        </label></p>
        <p><label>
          Email:<br/>
          <input type="email" placeholder="abc@gmail.com"  className="form-control" name = "email" value={this.state.email} onChange={this.handleChange} required/>
        </label></p>
        <p><label>
          password:<br/>
          <input type="password" placeholder="password"  className="form-control" name = "password" value={this.state.password} onChange={this.handleChange} required/>
        </label></p>
        <p><input type="submit" value="Register"  className="btn btn-success"/></p>
      </form>
   </div>
  );   
} 
}
export default Register;
