const bcrypt = require("bcryptjs");
const User = require("../models/userAuthModel");

exports.register = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;

    if (userName.length === 0) {
      return res.status(401).json({ error: "UserName cannot be empty" });
    }
    if (userEmail.length === 0) {
      return res.status(401).json({ error: "userEmail cannot be empty" });
    }
    if (userPassword.length === 0) {
      return res.status(401).json({ error: "userPassword cannot be empty" });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const user = new User({
      userName,
      userEmail,
      userPassword: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    if (userEmail.length === 0) {
      return res.status(401).json({ error: "userEmail cannot be empty" });
    }
    if (userPassword.length === 0) {
      return res.status(401).json({ error: "userPassword cannot be empty" });
    }
    const user = await User.findOne({ userEmail: userEmail });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    const isPasswordValidated = await bcrypt.compare(
      userPassword,
      user.userPassword
    );
    if (!isPasswordValidated) {
      return res.status(401).json({ error: "Password not correct" });
    }
    res.status(200).json({ message: "Login Successfull" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
