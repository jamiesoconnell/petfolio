const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  
  documentName: {
    type: String,
    required: true,
  },

  fileUrl: {
    type: String,
    required: true,
  },
  
  fileType: {
    type: String,
  },
  fileSize: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Document", DocumentSchema);
