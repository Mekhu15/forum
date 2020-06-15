// const express = require('express')
// const app = express.Router()
// const cors = require('cors')
// const mongoose = require('mongoose')
// const Post = require('../model/Post')
// app.use(cors())


// app.get('/allpost',(req,res)=>{
//     Post.find().then((posts)=>{
//         res.json({posts})
//     }).catch(err=>{
//         console.log(err);
//     })
    
// })

// app.post('/createpost',(req,res)=>{
//     const {body} = req.body 
//     if(!body ){
//       return  res.status(422).json({error:"Please add all the fields"})
//     }
//     const post = new Post({
//         body
//     })
//     post.save().then(result=>{
//         res.json({post:result})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

// module.exports = app