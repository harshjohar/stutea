const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    },
    answer: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    rating: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String
    }
})

const Answers = mongoose.model('answers', AnswerSchema);
module.exports=Answers;