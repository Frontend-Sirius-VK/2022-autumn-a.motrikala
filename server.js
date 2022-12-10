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

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/post/:id', async (req,res) => {
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

app.get('/getPostById/:id', async (req,res) => {
    const id = req.params.id;
    const result = await db.getPostById(id);
    res.json(result);
});

app.post('/create/post', async (req, res) => {
    const { author, subscribers, title, postUrl, contentData, imgUrl, published } = req.body;
    const id = await db.createPost(author, subscribers, title, postUrl, contentData, imgUrl, published);
    res.json({id})
})

app.put('/update/post/:id', async (req, res) => {
    const { id, author, subscribers, title, postUrl, contentData, imgUrl, published } = req.body;
    const result = await db.updatePost(id, author, subscribers, title, postUrl, contentData, imgUrl, published);
    res.json({result});
})

app.delete('/delete/post/:id', async (req, res) => {
    const { id } = req.body;
    const result = await db.deletePost(id);
    res.json({result});
})

