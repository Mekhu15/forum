const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'
//const JWT_SECRET = process.env.JWT_SEC;

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
         return res.status(422).json({ error: 'User already exists' })
      }
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
         return res.status(422).json({ error: 'User does not exist' })
      }
         bcrypt.compare(req.body.password, user.password)
       .then(doMatch=>{
         if(doMatch)
         {
           const token = jwt.sign({_id:user._id},process.env.SECRET_KEY = 'secret')
           const {_id,first_name,last_name,email} = user
           res.json({token,userData:{_id,first_name,last_name,email}})
         }
         else
         {
           return res.status(422).json({error:"wron password"});
         }
       })
       .catch(err=>{
         console.log(err)
       })
    
})
})


module.exports = users