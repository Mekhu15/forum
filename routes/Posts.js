const express = require('express')
const app = express.Router()
const mongoose = require('mongoose')
const Post = require('../model/Post')
app.use(cors())


app.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .populate("comments.postedBy","_id name")
    .sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})

app.post('/createpost',(req,res)=>{
    const {body} = req.body 
    if(!body ){
      return  res.status(422).json({error:"Please add all the fields"})
    }
    req.user.password = undefined
    const post = new Post({
        body,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = posts