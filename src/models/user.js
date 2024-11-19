var mongoose = require('mongoose');
var userModel = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
var User = mongoose.model('User', userModel);
module.exports = User;
