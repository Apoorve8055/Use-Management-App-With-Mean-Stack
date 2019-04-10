var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema(
    {
        "username": {type: String, required: true},
        "email": {type: String, required: true, unique: true},
        "password": {type: String, required: true}
    }
);

UserSchema.pre("save", function (next) {
    var user = this;
    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) return (err);
        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password){
    var pass = this.password;
    return bcrypt.compareSync(password,pass);
};

module.exports = mongoose.model("user", UserSchema);