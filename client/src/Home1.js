 import React, { Component } from 'react';
 import { Link, withRouter } from 'react-router-dom'
import history from './history';

class Home1 extends Component {
  constructor(props)
  {
    super(props);
  this.state = {
  }
  }

 render()
{
  
  return (

      <div className="container">
        <div className="jumbotron mt-5">
          <div class="row">
            <div class="col-md-12">
                <div class="pull-left">
                    <button className="btn btn-primary float-right"  onClick={() => history.push('/Signin')}>LogIn</button>
                     <button className="btn btn-primary float-right" onClick={() => history.push('/Register')}>Register</button>                
                </div>
            </div>
        </div>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
          </div>
        </div>
      </div>
    
  );   
} 
}
export default Home1;
 