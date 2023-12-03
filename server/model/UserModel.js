const mongoose = require('mongoose');

const schema =mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,  
        required: true,
        minLength: 5
    },
    email:{    
        type: String,
        required: true
    },
    fullname:{
        type: String
    },
    state:{
        type: Boolean
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model("User", schema);