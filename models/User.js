const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dp: {
        type: String,
        default: "https://res.cloudinary.com/stutea/image/upload/v1636875706/sample_nw8mlw.png"
    },
    city: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("users", UserSchema);
module.exports=User;