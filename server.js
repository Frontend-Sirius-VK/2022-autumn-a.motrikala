require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const db = require('./queries');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));

const port = process.env.APP_PORT || 3050;

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/login', (req,res) => {
    // TODO
});

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});

app.get('/posts', async (req,res) => {
    const result = await db.getPost();
    res.json(result);
});