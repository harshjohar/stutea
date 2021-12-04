const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    question: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    answered: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String] 
    },
    responded: {
        type: Boolean,
        default: false
    }, 
    image: {
        type: String
    }
});

const Questions = mongoose.model('questions', QuestionSchema);
module.exports=Questions;