const mongoose = require("mongoose");

const userSchems = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: Number,
    role:String,
    blogId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blogDB"
    }]
    
});

const userDB = mongoose.model('userDB', userSchems);

module.exports = userDB