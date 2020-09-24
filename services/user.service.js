const User = require('../models/user.model')

class UserService{
    static instance = null;

    users = [];

    static getInstanse(){
        if(UserService.instance)
            return this.instance;
        UserService.instance = new UserService();
        return UserService.instance;
    }

    getUsers(){
        return this.users;
    }

    createUser(firstName,LastName){
        let id = this.users.length;
        const newUser = new User(id,firstName,LastName);
        this.users.push(newUser);
        return newUser;
    }

    deleteUser(id){
        let indexInArrey = 0;
        this.users.find((user,index)=>{
            indexInArrey = index;
            return user.id === id;
        })        
        this.users.splice(indexInArrey,1);
    }

    updateUser(id,newUser){
        const user = this.users.find((user)=>{
            return user.id === id
        })
        Object.assign(user,newUser);
        return user;
    }

    getUser(id){
        const user = this.users.find((user)=>{
            return user.id === id;
        })
        if(user)
        return user;
        throw new Error('user not found')
    }
}

module.exports = UserService;