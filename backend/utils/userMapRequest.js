module.exports = function (user,data) {
    if (data.name){
        user.name = data.name;
    }
    if (data.email){
        user.email = data.email;
    }
    if(data.password)
      {
        user.username = data.password;
      }
      if(data.phone){
        user.phone =data.phone;
      }
      return user;
}