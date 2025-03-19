const UserModel = require('./../users/user.model');
const userMapRequest = require('./../../utils/userMapRequest');

async function register(data) {
    const newUser = new UserModle({});
    const mappNewUserRequest = userMapRequest(newUser,data)
    
    return await mappNewUserRequest.save();
   
}

module.exports = { register };
