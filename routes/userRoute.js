const express = require('express');
const mongoose = require('mongoose');
const User = require('../api/models/user');
const app = express();

app.post('/', async (req, res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email
    });
    try {
        await user.save().then(() => res.render('/Users/GriffinGeorgiadis/Documents/express-app/views/index.ejs'));
    } catch (err) {
        res.status(500).send(err);
    };
});

module.exports = app;