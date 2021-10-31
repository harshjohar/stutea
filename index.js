const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/questions', require('./routes/questions'));

app.get("/", (req, res)=> {
    res.send("hello world!, stutea here!");
})

app.listen(process.env.PORT || port, ()=> {
    console.log(`StuTea listening at http://localhost:5000/`);
})