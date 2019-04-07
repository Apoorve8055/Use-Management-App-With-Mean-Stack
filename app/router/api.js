var User = require('../model/user');

module.exports = function(router){
    router.post('/user', (req, res) => {
        var user = new User();
        user.username = req.body.name;
        user.email = req.body.email;
        user.password = req.body.pass;
        user.save((err, docs) => {
            if (err) res.send(" Email already Exist ");
            else res.send(docs);
        });
    });
    return router;
}
