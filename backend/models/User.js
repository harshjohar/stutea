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
    },
    QuestionsPosted : {
        type: Number,
        default: 0
    },
    AnswersAccepted : {
        type: Number,
        default: 0
    },
    AverageRating : {
        type: Number,
        default : 0.0
    }
})

const User = mongoose.model("users", UserSchema);
module.exports=User;