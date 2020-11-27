const mongoose = require('mongoose');
const { Schema } = mongoose;    //es6 destructuring same as const Schema= mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);    //model means add a collection named users with schema as userSchema