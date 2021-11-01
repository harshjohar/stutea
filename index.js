const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'), (req, res)=> {
    res.send("authorization endpoint ready!, Frontend Not ready Yet")
});
app.use('/api/questions', require('./routes/questions'), (req, res)=> {
    res.send("questions endpoint ready!, Frontend Not ready Yet")
});
app.use('/api/user', require('./routes/user'), (req, res)=> {
    res.send("user endpoint ready!")
})

app.get("/", (req, res)=> {
    res.send("hello world!, stutea here!");
})

app.listen(process.env.PORT || port, ()=> {
    console.log(`StuTea listening at http://localhost:5000/`);
})