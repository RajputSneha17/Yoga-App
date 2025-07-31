const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema( {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    json_file_url: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true, 
  });

module.exports = SessionSchema;
