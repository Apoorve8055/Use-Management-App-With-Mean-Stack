var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/usermgmt',(err)=>{
    if(err) throw err
    else console.log("DB connected!");
});