const { number, string } = require('joi');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        match: /^[0-9]{10}$/,
    },
    recentPasswordLink: {
        data: String,
        default: ''
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

