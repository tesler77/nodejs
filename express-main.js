const express = require('express');
const user = require('./services/user.service');

const app = express();

const userService = user.getInstanse();

userService.createUser('moshe','tesler');
userService.createUser('shmuel','praizler');

app.get('/api/users',(req,res)=>{
    res.status(200).send(userService.getUsers())
})

app.delete('/api/user/:id',(req,res)=>{
    const deletedUser = userService.deleteUser(req.params.id);
    res.status(204).send(deletedUser);
})

app.get('/api/user/:id',(req,res)=>{
    res.status(200).send(userService.getUser(parseInt(req.params.id)))
})

app.listen(3000,()=>{
    console.log('we are listening in port 3000')
})

