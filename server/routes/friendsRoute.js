const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const common = require('../common');
const User = require('../model/UserModel');

const router = express.Router();
const secretKey = common.secretKey;

//add friends
router.post('/send-friend-request', common.VerifyToken, async (req, res) => {

    const senderUsername = req.body.senderUsername;
    const recipientUsername = req.body.recipientUsername;

    const sender = await User.findOne({ username: senderUsername });
    const recipient = await User.findOne({ username: recipientUsername });

    if (!sender || !recipient) {
        res.status(404);
        res.send("Not Found");
        res.end();
    }
    else {
        recipient.friends.push(sender._id);
        sender.friends.push(recipient._id);

        await recipient.save();
        await sender.save();

        res.status(200);
        res.send("user friend added successfully");
        res.end();
    }

    res.end();
});


//remove friends
router.put('/remove-friend-request', common.VerifyToken, async (req, res) => {

    const senderUsername = req.body.senderUsername;
    const recipientUsername = req.body.recipientUsername;

    const sender = await User.findOne({ username: senderUsername });
    const recipient = await User.findOne({ username: recipientUsername });
    
    const senderIndexInRecipient = recipient.friends.indexOf(sender._id);
    const recipientIndexInSender = sender.friends.indexOf(recipient._id);
    
    if (senderIndexInRecipient !== -1 && recipientIndexInSender !== -1) {
        recipient.friends.splice(senderIndexInRecipient, 1);
        sender.friends.splice(recipientIndexInSender, 1);

        await recipient.save();
        await sender.save();
        res.status(200).send("User friend removed successfully");
    }
    else {
        res.status(404).send("Not Found");
    }
    res.end();
});


//get user friendsIds
router.post('/getfriends', common.VerifyToken, async (req, res) => {
    
    let user = await User.findOne({ 
        username: req.body.username
    });

    if (user) {
        let arr= [];
        user.friends.map((f) => {f._id
            arr.push(f._id);
        });
        res.status(200);
        res.send(arr);         
    }
    else{
        res.status(404);
        res.send("user not found");  
    }
    res.end();
});


module.exports = router;