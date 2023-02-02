const mongoose = require("mongoose");
require("dotenv").config();
const localMongo =
    "mongodb://localhost:27017/Stutea?readPreference=primary&directConnection=true&ssl=false";
const mongoURI = process.env.MONGO_URI||localMongo;

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo");
    });
};

module.exports = connectToMongo;
