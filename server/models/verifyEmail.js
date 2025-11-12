const { Schema, model } = require("mongoose");

const verifyEmailsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expiresDate: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 60 * 60 * 1000),
    index: { expires: "1h" },
  },
});

module.exports = model("verifyEmails", verifyEmailsSchema);
