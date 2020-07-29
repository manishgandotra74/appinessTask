const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Userrole = require('../models/user-role');

router.post("/add-user", function (req, res) {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    // checks if any user exists
    User.find({}).then(data => {
        // if not exists it will create admin
        if (data.length === 0) {
            user.save().then(data => {
                // After admin it will assign role to that id
                if (data._id) {
                    const userrole = new Userrole({
                        userid: data._id,
                        userrole: "ADMIN",
                    })
                    userrole.save().then(admin => {
                        if (admin._id) {
                            res.status(200).send({ message: "Admin register Successfully" })
                        } else {
                            res.status(500).send({ message: "Some error Occured" })

                        }
                    })
                }
            })
            console.log(user);
        } else {
            // it will create user
            // first of all it will check that user is existing or not
            User.find({ email: req.body.email }).then(dataa => {
                if (dataa.length === 0) {
                    user.save().then(data => {
                        if (data._id) {
                            const userrole = new Userrole({
                                userid: data._id,
                                userrole: "USER",
                            })
                            userrole.save().then(admin => {
                                if (admin._id) {
                                    res.status(200).send({ message: "User register Successfully" })
                                } else {
                                    res.status(500).send({ message: "Some error Occured" })

                                }
                            })
                        }
                    })
                } else {
                    res.status(500).send({ message: "User Already Exists" })

                }
            })
        }
    })

});

module.exports = router;

// table count  then register as admin 
// if > 0