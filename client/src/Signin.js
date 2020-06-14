import React, { Component } from 'react';
import { login } from './Function'

class Signin extends Component {

   constructor(props)
  {
    super(props);
  this.state = {
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

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/Home`)
      }
    })
  }

  render()
{
  
  return (
    <div class = "conatiner">
      <form onSubmit={(e)=>this.handleSubmit(e,this.state.id)} className="add">
     <h5>LogIn</h5><br/>
        <p><label>
          Email:<br/>
          <input type="email" placeholder="abc@gmail.com"  className="form-control" name = "email" value={this.state.email} onChange={this.handleChange} required/>
        </label></p>
        <p><label>
          password:<br/>
          <input type="password" placeholder="password"  className="form-control" name = "password" value={this.state.password} onChange={this.handleChange} required/>
        </label></p>
        <p><input type="submit" value="Login"  className="btn btn-success"/></p>
      </form>
   </div>
  );   
} 
}
export default Signin;
