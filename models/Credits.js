const mongoose=require('mongoose');

const creditSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }, 
    credits: {
        type: Number,
        default: 1000
    }
})

const Credits = mongoose.model('credits', creditSchema);
module.exports=Credits;