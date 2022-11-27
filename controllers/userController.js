const User = require('../models/userModel');

exports.signUp = async (req, res, next) => {
    return res.status(200).send({ message: "Hitting the signUp route" });
}

exports.logIn = async (req, res) => {
    return res.status(200).send({ message: "hitting LogIn route" });
}

exports.updateUser = async (req, res) => {
    return res.status(200).send({ message: "hitting the updateUser route" });
}

exports.deleteUser = async (req, res) => {
    return res.status(200).send({ message: "hitting deleteUser route" });
}

exports.data = async (req, res) => {
    return res.status(200).send({ message: "hitting the data route" });
}