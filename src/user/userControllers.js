const jwt = require("jsonwebtoken");
const User = require("./userModels");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET);
    res.status(200).send({ user: newUser.username, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET);
    res.status(200).send({ user: req.user.username, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateCheck = await User.updateOne(
      { username: req.user.username },
      { pass: req.body.pass }
    );
    if (updateCheck.modifiedCount > 0) {
      res.status(200).send({ msg: "Successfully updated user" });
    } else {
      throw new Error("Nothing updated");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let deleteCheck;
    if (req.user.username === req.params.username) {
      deleteCheck = await User.deleteOne({ _id: req.user._id });
    } else {
      throw new Error("Incorrect Credentials");
    }
    if (deleteCheck && deleteCheck.deletedCount > 0) {
      res.status(200).send({ msg: "Success" });
    } else {
      throw new Error("Nothing deleted");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};