const mongoose = require("mongoose");
const SessionSchema = require("../Schema/SessionSchema.js");

const SessionModel = mongoose.model("Session", SessionSchema);

module.exports = SessionModel;
