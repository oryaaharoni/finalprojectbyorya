const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const common = require('../common');
const User = require('../model/UserModel');

const router = express.Router();
const secretKey = common.secretKey;

router.get('/', async (req, res) => {

    let users = await User.find();

    res.send(users);
    res.end();
});

//register user
router.post('/', async (req, res) => {

    bcrypt.hash(req.body.password, 10).then(async (hashedPassword) => {
        const user = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            fullname: req.body.fullname,
            state: false
        })
        try {
            await user.save();
            res.send(user);
            res.end();
        }
        catch (error) {
            res.status(404);
            res.send(error);
            res.end();
        }
    })
});

//login user
router.post('/login', async (req, res) => {

    let user = await User.findOne({
        username: req.body.username
    });
    
    if (user) {
    
        bcrypt.compare(req.body.password, user.password)
            .then((result) => {

                if (result) {

                    const token = jwt.sign({
                        _id: user._id,
                        username: user.username
                    }, secretKey);
                   
                    res.send({
                        token: token,
                        username: user.username,
                        email: user.email,
                        fullname: user.fullname,
                        state: true
                    });
                    res.end();
                }
                else {
                    res.status(404);
                    res.send("Something Inccorect");
                    res.end();
                }
            })       
    }
    else {
        res.status(404);
        res.send("Something Inccorect");
        res.end();
    }
});

//delete User
router.delete('/:id', common.VerifyToken, async (req, res) => {

    try 
    {
        let temp = await User.findById(req.params.id);

        await User.deleteOne({
            _id: req.params.id
        })
        res.status(200);
        res.send(temp);
        res.end();

    }
    catch (error) {
        res.status(500);
        res.send(error);
        res.end();
    }
});

//change state to login =true
router.put('/statelogin', common.VerifyToken, async (req, res) => {
    try {
        const username = req.body.username;
        const user = await User.findOne({ username: username });
        
        if (user) {
            // user.state = !user.state;
            user.state = true;
            await user.save();
            res.status(200);
            //res.send("User state updated successfully");
            res.end();
        } else {
            res.status(404);
            res.send("User not found");
            res.end();
        }
        //check if this is the error
    } catch (error) {
        res.status(500).send(error);
        res.end();
    }
});

// //change state to logout=false
router.put('/statelogout', common.VerifyToken, async (req, res) => {
    try {
        const username = req.body.username;
        const user = await User.findOne({ username: username });
        
        if (user) {
            user.state = false;
            await user.save();
            res.status(200);
            //res.send("User state updated successfully");
            res.end();
        } else {
            res.status(404);
            res.send("User not found");
            res.end();
        }
        //check if this is the error
    } catch (error) {
        res.status(500).send(error);
        res.end();
    }
});

//get user information by username
router.post('/findbyUsername', common.VerifyToken, async (req, res) => {
    
    let user = await User.findOne({ 
        username: req.body.username
    });

    if (user) {
        res.send({
            _id: user._id,
            username: user.username,
            email: user.email,
            fullname: user.fullname,
            state: user.state,
            friends: user.friends
        })    
    }
    else{
        res.status(404);
        res.send("user not found");  
    }
    res.end();
});

//get user information by id
router.post('/findbyid', common.VerifyToken, async (req, res) => {
    
    let user = await User.findOne({ 
        _id: req.body.id
    });

    if (user) {
        res.send({
            _id: user._id,
            username: user.username,
            email: user.email,
            fullname: user.fullname,
            state: user.state,
            friends: user.friends
        })    
    }
    else{
        res.status(404);
        res.send("user not found");  
    }
    res.end();
});

module.exports = router;