// const express = require('express');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// const common = require('../common');
// const User = require('../model/UserModel');

// const router = express.Router();


// //change state to true
// router.put('/enterstate', common.VerifyToken, async (req, res) => {
//     try {
//         const username = req.body.username;
//         const user = await User.findOne({ username: username });
        
//         if (user) {
//             user.state = true;
//             await user.save();
//             res.status(200);
//             res.send("User state login updated successfully");
//             res.end();
//         } else {
//             res.status(404);
//             res.send("User not found");
//             res.end();
//         }
//         //check if this is the error
//     } catch (error) {
//         res.status(500).send(error);
//         res.end();
//     }
// });



// //change state to false
// router.put('/outstate', common.VerifyToken, async (req, res) => {
//     try {
//         const username = req.body.username;
//         const user = await User.findOne({ username: username });
        
//         if (user) {
//             user.state = false;
//             await user.save();
//             res.status(200);
//             res.send("User state logout updated successfully");
//             res.end();
//         } else {
//             res.status(404);
//             res.send("User not found");
//             res.end();
//         }
//         //check if this is the error
//     } catch (error) {
//         res.status(500).send(error);
//         res.end();
//     }
// });