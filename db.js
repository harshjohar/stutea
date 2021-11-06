const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://stutea:kzJGbAgEKGJddxbZ@project.inobc.mongodb.net/Stutea"

// localhost for testing
// const mongoURI = "mongodb://localhost:27017/stutea?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false" 

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("connected to mongo");
    })
}

module.exports = connectToMongo;