 import React, { Component } from 'react';
 import axios from 'axios';



class Home2 extends Component {
  constructor(props)
  {
    super(props);
  this.state = {
    post: [],
    id : 0,
    body: ''
  }
   this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount = () => {
   this.print();
}
print = () =>
{
  axios.get('posts/allpost').then(response => {
    const data = response.data;
    this.setState({
      post: data,
      id: 0,
      body: ''
    });
    console.log("recieved");
  }).catch (() => {
    console.log('not received');
  });
}

createPost(e){
  axios.post('posts/createpost',
  {body:this.state.body})
      .then(() => {
        console.log('Data has been sent to the server');
         this.componentDidMount();
        this.resetUserInputs();
      })
      .catch(() => {
        console.log('Internal server error');
      });
}

 logOut(e) {
    e.preventDefault()
    localStorage.removeItem('email')
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

 render()
{
  
  return (

      <div className="container">
          <div class="row">
            <div class="col-md-12">
                <div class="pull-left">
                 <button className="btn btn-primary float-right"  onClick={this.logOut.bind(this)} >LogOut</button>                
                </div>
            </div>
        </div>
          <div className="col-sm-8 mx-auto">
           <form>
           <textarea rows="4" cols="50" placeholder="Comment here..."  name = "body" className="form-control" value={this.state.body} onChange= {this.handleChange}/>
           </form>
           <div class="row">
            <div class="col-md-12">
                <div class="pull-left">
                <button className="btn btn-primary float-left"   onClick={this.createPost.bind(this)} >Comment</button>              
                </div>
            </div>
        </div>
          </div>
      </div>
    
  );   
} 
}
export default Home2;
 