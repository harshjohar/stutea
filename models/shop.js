const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
    name: {
        type: String

    },
    credits: {
        type: Number,
        default: 0
    }

})

const Shop = mongoose.model('shop', ShopSchema);
module.exports=Shop;