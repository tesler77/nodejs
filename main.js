const userServices = require('./services/user.service');

const UserService = userServices.getInstanse();

UserService.createUser('moshe','tesler');
UserService.createUser('shmuel','praizler');

console.log(UserService.getUsers());

UserService.updateUser(1,{firstName:'shmulik'});

console.log(UserService.getUsers())

UserService.deleteUser(1);

console.log(UserService.getUsers())