const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },
    token: { type: String, required: true },
    expireAt: { type: Date, default: Date.now, index: { expires: 86400000 } },
});
const Token = mongoose.model("token", tokenSchema);
module.exports = Token;
