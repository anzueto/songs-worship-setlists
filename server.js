const express = require('express');
const method = require('method-override');
const app = express();
const port = 3000;

const mongoose = require('./db/connection.js');


app.set('view engine', 'jsx'); // setting up JSX
app.engine('jsx', require('express-react-views').createEngine());

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static('public'));

const Songs = require('./models/songs.js');

const songsController = require('./controller/setlists.js');


// gets the info to the home page
app.get('/', (req, res) => {
    Songs.find({})

        .then(songs => {
            res.render('Index', { songs });
        });
});


app.use('/songs', songsController);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// listen router
app.listen(port, () => {
    console.log('server is running')
});