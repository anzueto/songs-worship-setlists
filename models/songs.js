const mongoose = require('../db/connection');

const SongsSchema = new mongoose.Schema({
    name: String,
    author: String,
    type: String,
    theme: String,
    youtubeId: String,
    createdAt: { type: Date, default: Date.now }
});

const Songs = mongoose.model('Songs', SongsSchema);

module.exports = Songs;