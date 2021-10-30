const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://harshjohar:Harsh2002%23@johar.fc1ia.mongodb.net/StuTea"

// localhost for testing
const mongoURI = "mongodb://localhost:27017/stutea?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false" 

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("connected to mongo");
    })
}

module.exports = connectToMongo;