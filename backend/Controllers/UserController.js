const User = require("../Model/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 8;

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({ email, password: hashPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Please Enter unique email" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user) {
    const dbPassword = user.password;
    const isMatch = await bcrypt.compare(password, dbPassword);
    if (isMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token, message: "You login successfully!" });
    } else {
      return res.status(401).json({ error: "Incorrect password" });
    }
  }
};

module.exports = { register, login };
