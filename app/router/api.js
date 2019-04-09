var User = require('../model/user');

module.exports = function(router){
    router.post('/user', function(req, res) {
        var user = new User();
        user.username = req.body.name;
        user.email = req.body.email;
        user.password = req.body.pass;
        user.save((err, docs) => {
            if (err) res.json({ success : false , message : "Registration failed , Email already exist"});
            else res.json({ success : true , message : "Registration Successfully"});
        });
    });

    router.get('/view', (req, res) => {
       User.find((err,docs)=>{
           if(err) res.send("Data Not Found!");
           else res.json(docs);
       });

    });

    return router;

}
