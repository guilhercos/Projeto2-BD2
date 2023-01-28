const express = require('express');
const db = require('./db/db');
const noteController = require('./controllers/noteController');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

db.Connect();

// Routes
const routes = require('./routes/routes');

app.use(routes);

app.get('/', async(req, res) => {
    res.sendFile(__dirname + '/source/html/index.html');
});

app.patch('/:id', async (req, res) => {
});

app.delete('/:id', async (req, res) => {
});

app.listen(3000, function(){
    console.log("App running on port 3000");
});