const mongoose = require('mongoose');

const schema =mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
    user1:{    
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    user2:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
});

module.exports = mongoose.model("Room", schema);