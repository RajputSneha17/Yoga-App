const mongoose = require("mongoose");
const UserSchema = require("../Schema/UserSchema.js");

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
