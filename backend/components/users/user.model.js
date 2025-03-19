const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
   name: String,
    email: String,
   
   username: String,
   password:String,
   
   phone:String,
},   {
    timestamps: true
});

module.exports = mongoose.model('user',newSchema);