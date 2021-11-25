const mongoose = require('mongoose');

const FavouriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    tags: {
        type: [String]
    }
})

const Favourites = mongoose.model('favourites', FavouriteSchema);
module.exports = Favourites;