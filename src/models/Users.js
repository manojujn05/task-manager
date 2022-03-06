const mongoose = require('mongoose');
var validator = require('validator');

const User = mongoose.model('users', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        validate(value) {
            if(value.toLowerCase().includes("Password"))
            {
                throw new Error("Your password should not contain");
            }
        }

    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowerCase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error("Age is invalid"); 
            }
        }
    }
})

module.exports = User;
