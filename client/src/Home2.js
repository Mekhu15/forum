 import React, { Component } from 'react';
 import axios from 'axios';



class Home2 extends Component {
  constructor(props)
  {
    super(props);
  this.state = {
    post: [],
    id : 0,
    name: ''
  }
   this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount = () => {
   this.print();
}
print = () =>
{
  axios.get('/home').then(response => {
    const data = response.data;
    this.setState({
      post: data,
      id: 0,
      name: ''
    });
    console.log("recieved");
  }).catch (() => {
    console.log('not received');
  });
}

createPost(e){
  axios.post('/home',
  {name:this.state.name})
      .then(() => {
        console.log('Data has been sent to the server');
         this.componentDidMount();
        this.resetUserInputs();
      })
      .catch(() => {
        console.log('Internal server error');
      });
}

resetUserInputs = () =>
{
  this.setState({
    name:''
  })
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
        </div><br/>
        {this.state.post.map((comments) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{comments.name}</h5>
            </div>
          </div>
        ))}
        <br/>
          <div className="col-sm-8 mx-auto">
           <form>
           <textarea rows="4" cols="50" placeholder="Comment here..."  name = "name" className="form-control" value={this.state.name} onChange= {this.handleChange}/>
           </form>
           <br/>
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
 