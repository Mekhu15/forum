import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import './index.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home1 from './Home1';
import Home2 from './Home2';
import Register from './Register';
import Signin from './Signin';
import history from './history';

class App extends Component {
  constructor(props)
  {
    super(props);
  this.state = {

  }
  }

render()
{
  
  return (
       <Router history={history}>
                <Switch>
    <div>
        <Route path="/" exact component={Home1} />
        <Route path="/Signin" component={Signin} />
        <Route path="/Register" component={Register} />
        <Route path="/home1" component={Home1} />
        <Route path="/Home" component={Home2} />
                    </div>
    </Switch>
     </Router>
    
  );   
} 
}
export default App;
