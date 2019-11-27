const Songs = require('../models/songs');
const data = require('./seeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

Songs.deleteMany({})
    .then(() => {
        return Songs.collection.insertMany(data);
    })
    .then(() => {
        process.exit();
    });