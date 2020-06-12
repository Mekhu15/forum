import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  constructor(props)
  {
    super(props);
  this.state = {
//     search: null,
//    object: [],
//    id : 0,
//    check: false,
//    name: "",
//    phoneNumber: "",
//    email: "",
//    dateOfBirth: "",
//    showMe: false,
//    val: "Add Contacts",
//    show: false,
//    visible:3
  }
  }
// componentDidMount = () => {
//    this.print();
// }

// // get data from the database
// print = () => 
// {
//   axios.get('/home').then((response) =>
//   {
//     const data = response.data;
//     this.setState(
//       {
//         object: data ,
//          id: 0,
//         name: "",
//         phoneNumber: "",
//         email: "",
//         dateOfBirth: ""
//       }
//     );
//     console.log("recieved");
//   }).catch (() => {
//     console.log('not received');
//   });
// }

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };


//       //insert data and update data
//   handleSubmit (event,id) {
//     event.preventDefault();

//   if(id === 0 )
//   {
//     axios.post('/home',{name:this.state.name,phoneNumber:this.state.phoneNumber,email:this.state.email, dateOfBirth:this.state.dateOfBirth})
//       .then(() => {
//         console.log('Data has been sent to the server');
//          this.componentDidMount();
//         this.resetUserInputs();
//       })
//       .catch(() => {
//         console.log('Internal server error');
//       });
//   }
//   else{
//     console.log("here");
//     axios.put(`/home/${id}`,{name:this.state.name,phoneNumber:this.state.phoneNumber,email:this.state.email,dateOfBirth:this.state.dateOfBirth})
//     .then(() => {
//          this.componentDidMount();
//            this.resetUserInputs();
//         console.log('Data has been updated to the server');
//       })
//       .catch(() => {
//         console.log('Internal server error');
//       });
//   }
//   };

//      //reset input fields
//    resetUserInputs= () =>{
//      this.setState({
//        name: "",
//      phoneNumber: "",
//      email: "",
//      dateOfBirth: ""
//    });
//    }

//    //delete data from database
// deleteContact = (id) =>{
//   axios.delete(`/home/${id}`).then((response)=>
//   {
//     this.componentDidMount();
//   console.log("deleted");
//   }).catch(()=> {
//     console.log("not deleted");
//   });
// }
//  //edit function
//  editContact = (id) => 
//  {
//    axios.get(`/home/${id}`).then((response)=>
//    {
//      this.setState({
//        id: response.data._id,
//        name:response.data.name,
//        phoneNumber:response.data.phoneNumber,
//        email: response.data.email,
//        dateOfBirth:response.data.dateOfBirth,
//        show : true,
//      })
//    });
//  }

//   //details of the contact 
//   detailContact =(id) =>
//   {
//     axios.get(`/home/${id}`).then((response)=>
//    {
//      this.setState({
//        id: response.data._id,
//        name:response.data.name,
//        phoneNumber:response.data.phoneNumber,
//        email: response.data.email,
//        dateOfBirth:response.data.dateOfBirth,
//        check : true,
//        visible: 3
//      })
//    });

//   //  this.loadMore = this.loadMore.bind(this);
//   }

//    //to show Add form
//  handleModal= (event)=>{
//    this.resetUserInputs();
//    this.setState({
//      showMe: !this.state.showMe
//    });
//  }

//  handleModal2= (event)=>{
//    this.setState({
//      show: !this.state.show
//    });
//  }

// handleModal3= (event)=>{
//    this.setState({
//      check: !this.state.check
//    });
//  }

//   //search contacts
// searchContact=(event) =>
// {
//    event.preventDefault();
//     let name1 = event.target.value;
//    this.setState({
//     search: name1.toLowerCase()
//    })
// }

//   //load more contacts

// // loadMore= (event) =>
// // {
// //  this.setState({
// //    visible: this.state.visible + 1
// //  })
// // }

// // showLess= (event) =>
// // {
// //  this.setState({
// //    visible: this.state.visible - 1
// //  })
// // }


render()
{
  
  return (
     <div class = "conatiner">
    <h3> Welcome !!</h3>
   </div>
  );   
} 
}
export default App;
