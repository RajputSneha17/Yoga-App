const mongoose = require("mongoose");
const SessionSchema = require("../Schema/SessionSchema.js");

const SessionModel = mongoose.Model("Session", SessionSchema);

module.exports =  SessionModel;