const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Certificate = require('../models/Cid');

const login = async (req, res) => {
  const { 
    email, 
    password,
    noOfProjects,
    cid
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Bad request. Please add email and password in the request body",
    });
  }

  let user;
  if(email && password){
    let foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
      const isMatch = await foundUser.comparePassword(password);

      if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name, email: foundUser.email, password: foundUser.password },
        process.env.JWT_SECRET,
        {
          expiresIn: '30d',
        }
      );
        console.log('Generated Token:', token);
        return res.status(200).json({ msg: "user logged in", token });
      } else {
        return res.status(400).json({ msg: "Bad password" });
      }
    } else {
      return res.status(400).json({ msg: "Bad credentails" });
    }
  }
  else{
    //If the certificate id is entered in the login page.
    user = await Certificate.findOne({cid});

    if(!user){
      return res.status(400).json({ msg: "Invalid CID" });
    }
  }
};


const dashboard = async (req, res) => {
  console.log('req:', req.user);
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    // data: req,
    name: `Hello, ${req.user.name}`,
    email: `Hi ${req.user.email}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

const getAllUsers = async (req, res) => {
  let users = await User.find({});

  return res.status(200).json({ users });
};

const register = async (req, res) => {
  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser === null) {
    let { username, email, password, noOfProjects } = req.body;
    if (username.length && email.length && password.length) {
      const person = new User({
        name: username,
        email: email,
        password: password,
        noOfProjects: noOfProjects,
      });
      await person.save();
      return res.status(201).json({ person });
    }else{
        return res.status(400).json({msg: "Please add all values in the request body"});
    }
  } else {
    return res.status(400).json({ msg: "Email already in use" });
  }
};

const verify = async(req, res) => {
  console.log(req.body);
  const { cid } = req.params;

  try {
    // Lookup certificate by CID
    const certificate = await Certificate.findOne({ cid });
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    // Return certificate URL
    console.log(certificate.certificateURl);
    res.json({ certificateURL: certificate.certificateURl }); // Corrected line
  } catch (err) {
    console.error('Error during certificate lookup:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = {
  login,
  register,
  dashboard,
  getAllUsers,
  verify
};
