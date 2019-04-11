var User = require('../model/user');
var jwt = require('jwt-simple');
var secret = "Apoorve@verma";
module.exports = function (router) {
    router.post('/user', function (req, res) {
        var user = new User();
        user.username = req.body.name;
        user.email = req.body.email;
        user.password = req.body.pass;
        user.save((err, docs) => {
            if (err) res.json({success: false, message: "Registration failed , Email already exist"});
            else res.json({success: true, message: "Registration Successfully"});
        });
    });

    router.post('/authentication', function (req, res) {
        User.findOne({
            'email': req.body.email
        }).select("username email password").exec(function (err, users) {


            if (users) {
                var AuthStatus = users.comparePassword(req.body.pass);
                if (AuthStatus) {
                    var token = jwt.encode({ "username" : users.username , "email" : users.email  },secret)
                    res.json({success: true, message: "Successfully LogIn" ,"token" : token  });
                } else {
                    res.json({success: false, message: "Password incorrect "});
                }
            } else {
                res.json({success: false, message: "Users Email incorrect"});
            }
        });
    });

    router.get('/view', (req, res) => {
        User.find((err, docs) => {
            if (err) res.send("Data Not Found!");
            else res.json(docs);
        });

    });

    return router;

}
