const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
const { confirmEmail, resendEmail } = require('./routes/confirmation');

connectToMongo();
const app = express();
const port = 5000;

// middlewares
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
});
app.use('/api/answers', require('./routes/answers'), (req, res)=> {
    res.send("answers endpoint ready")
})
app.use('/api/feedback', require('./routes/feedback'), (req, res)=> {
    res.send("feedback endpoint ready")
});
app.use('/api/credits', require('./routes/credits'), (req, res)=> {
    res.send("credits endpoint ready")
});
app.use('/api/shop', require('./routes/shop'), (req, res)=> {
    res.send("shop endpoint ready")
});
app.use('/api/notifications', require('./routes/notifications'), (req, res)=> {
    res.send("notifications endpoint ready")
})
app.use('/api/tags', require("./routes/tags"), (req, res)=> {
    res.send("Tags endpoint ready!")
})
app.get("/", (req, res)=> {
    res.send("hello world!, stutea here!");
})
app.get('/confirmation/:email/:token', confirmEmail);
app.post('/resend', resendEmail);

// PORT
app.listen(process.env.PORT || port, ()=> {
    console.log(`StuTea listening at http://localhost:5000/`);
})