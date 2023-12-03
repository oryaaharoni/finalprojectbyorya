const mongoose = require('mongoose');
// const User = require('../model/UserModel');

const schema =mongoose.Schema({
    date:{
        type: Date,
        required: true,
    },
    text:{
        type: String,  
        required: true,
        minLength: 1
    },
    senderId:{    
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // reciever:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     require: true
    // }
});

module.exports = mongoose.model("Message", schema);