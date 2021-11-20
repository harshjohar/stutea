const mongoose = require('mongoose');

const NotifSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    recents: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    },
    type: {
        type: String
        // available: {
        //     answered,
        //     credits
        // }
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Notifications = mongoose.model('notifications', NotifSchema);

module.exports=Notifications