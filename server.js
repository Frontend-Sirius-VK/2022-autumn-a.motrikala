require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const db = require('./queries');
const port = process.env.APP_PORT || 3050;

app.use(morgan('dev'));
app.use(express.static('.'));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.get('/api/posts', async (req,res) => {
    try {
        const result = await db.getPost();
        if (!result) {
            res.status(500).end();
        }
        if (result.code === 'ECONNREFUSED') {
            res.status(500).end();
        }
        res.json(result);
    } catch (error) {
        res.status(500).end();
    }
});

app.get('/api/getPostById/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const result = await db.getPostById(id);
        if (!result) {
            res.status(404).end();
        }
        if (result.name === 'error') {
            res.status(404).end();
        }
        res.json(result);
    } catch (error) {
        res.status(500).end();
    }
    //TODO переделать на REST
});

app.post('/api/create/post', async (req, res) => {
    try {
        const {author, subscribers, title, postUrl, contentData, imgUrl, published} = req.body;
        const result = await db.createPost(author, subscribers, title, postUrl, contentData, imgUrl, published);
        if (!result) {
            res.status(404).end();
        }
        if (result.name === 'error') {
            res.status(404).end();
        }
        res.json(result);
    } catch (error) {
        res.status(500).end();
    }
});

app.put('/api/update/post/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {author, subscribers, title, postUrl, contentData, imgUrl, published} = req.body;
        const result = await db.updatePost(author, subscribers, title, postUrl, contentData, imgUrl, published, id);
        if (!result) {
            res.status(404).end();
        }
        if (result.name === 'error') {
            res.status(404).end();
        }
        res.json(result);
    } catch (error) {
        res.status(500).end();
    }
});

app.delete('/api/delete/post/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.deletePost(id);
        res.end()
    } catch (error) {
        res.status(500).end();
    }
});

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});
