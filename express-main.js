const express = require('express');
const user = require('./services/user.service');
const path = require('path');
const cors = require('cors');

const app = express();

const userService = user.getInstanse();

userService.createUser('moshe','tesler');
userService.createUser('shmuel','praizler');

app.set('view engine','hbs');
app.set('views',path.resolve(__dirname,'views'));
app.use(cors())
app.get('/api/users',(req,res)=>{
    res.status(200).send(userService.getUsers())
})

app.delete('/api/user/:id',(req,res,next)=>{
    const deletedUser = userService.deleteUser(req.params.id);
    res.status(204).send(deletedUser);
})

app.get('/api/user/:id',(req,res,next)=>{
    try{

        const u = userService.getUser(parseInt(req.params.id))
        res.status(200).send(u)
    }catch(expetion){

        next(expetion);
    }
    
    
})

app.use((err,req,res,next)=>{
    res.status(404).render('error',{error:err.message,layout:false})
})

app.listen(3000,()=>{
    console.log('we are listening in port 3000')
})

