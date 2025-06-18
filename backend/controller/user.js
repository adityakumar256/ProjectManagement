const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");



const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const found = await User.findOne({ email });
    if (found) {
      return res.status(400).json({ message: "User already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const found = await User.findOne({ email });
    if (!found) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, found.password);
    if (match) {
      // Generate JWT token
      const token = jwt.sign(
        { userId: found._id, email: found.email },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "User login successful", token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
  console.error("Server error:", err);
  res.status(500).json({ message: err.message }); 
}

};

module.exports = { login, signup };
