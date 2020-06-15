import React, { Component } from 'react';
import history from './history';
import  axios from 'axios';

class Home1 extends Component {
  constructor(props)
  {
    super(props);
  this.state = {
     post: [],
  }
   
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

 render()
{
  
  return (
         <div>
          <div class="row">
            <div class="col-md-12">
                <div class="pull-left">
                    <button className="btn btn-primary float-right"  onClick={() => history.push('/Signin')}>LogIn</button>
                     <button className="btn btn-primary float-right" onClick={() => history.push('/Register')}>Register</button>                
                </div>
            </div>
        </div>
           {this.state.post.map((comments) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{comments.name}</h5>
            </div>
          </div>
        ))}
        </div>
    
  );   
} 
}
export default Home1;
 