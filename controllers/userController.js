const User = require('../models/userModel');

exports.signUp = async (req, res, next) => {
    //return res.status(200).send({ message: "Hitting the signUp route" });
    try {
        const newUser = await createUserObj(req);
        const savedUser = await User.create(newUser);
        return res.status(200).send({ message: "User created successfully", user: savedUser })
    }
    catch (err) {
        return res.status(400).send({ error: "Unable to Create User", error: err });
    }
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

const createUserObj = async (req) => {
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
}