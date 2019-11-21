const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const _ = require('lodash');
const mongoose = require("mongoose");
const User = require("./api/models/user");
const userRouter = require('./routes/userRoute');
const aboutMeRouter = require('./routes/aboutme');
const experienceRouter = require('./routes/experience');
const projectsRouter = require('./routes/projects');
const indexRouter = require('./routes/index');


const app = express();

mongoose.connect(`mongodb+srv://Griff:${process.env.MONGO_ATLAS_PW}@cluster0-wfujd.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

//Routes
app.use(userRouter);
app.use(indexRouter);
app.use(aboutMeRouter);
app.use(experienceRouter);
app.use(projectsRouter);



const port = 3000 || process.env.PORT;
app.listen(port, (req, res) => {
    console.log(`Server listening on port: ${port}`);
});

