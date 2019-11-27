const express = require('express');
const router = express.Router();

const Songs = require('../models/songs.js');


// index router
router.get('/', (req, res) => {
    Songs.find({}).then(songs => {
        res.render('songs/Index', { songs });
    });
});


// new router
router.get('/new', (req, res) => {
    res.render('Songs/New');
});

// show router
router.get('/:id', (req, res) => {
    Songs.findOne({ _id: req.params.id }).then(songs => {
        res.render('songs/Show', songs);
    });
});


// create router
router.post('/', (req, res) => {
    console.log(req.body);
    Songs.create(req.body).then(() => {
        res.redirect('/');
    });
});

// edit route
router.get('/edit/:id', (req, res) => {
    Songs.findOne(
        { _id: req.params.id }
    ).then(songs => {
        res.render('songs/Edit', songs);
    });
});

//update route
router.put('/:id', (req, res) => {
    Songs.findOneAndUpdate(
        { _id: req.params.id },
        req.body
    ).then(songs => {
        res.redirect(`/songs`);
    });
});

router.delete('/:id', (req, res) => {
    Songs.findOneAndRemove(
        { _id: req.params.id }
    ).then(() => {
        res.redirect('/songs');
    });
});

module.exports = router;