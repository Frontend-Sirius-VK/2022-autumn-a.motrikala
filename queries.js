const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST ?? 'localhost',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
});

async function getPost() {
    try {
        const result = await pool.query(
            'select * from post'
        )
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

async function getPostById(id) {
    try {
        const result = await pool.query('SELECT * FROM post WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
}
async function createPost(author, subscribers, title, postUrl, contentData, imgUrl, published) {
    try {
        const result = await pool.query(
            'INSERT INTO post (author, subscribers, title, postUrl, contentData, imgUrl, published) \ ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
            [author, subscribers, title, postUrl, contentData, imgUrl, published]
        )
        return result.rows[0].id
    } catch (error) {
        console.log(error)
    }
}

async function updatePost(author, subscribers, title, postUrl, contentData, imgUrl, published, id) {
    try {
        await pool.query(
            'UPDATE post SET author = $1, subscribers = $2, title = $3, \
                postUrl = $4, contentData = $5, imgUrl = $6, published = $7 WHERE id = $8',
            [author, subscribers, title, postUrl, contentData, imgUrl, published, id]
        )
    } catch (error) {
        console.log(error)
    }
}

async function deletePost(id) {
    try {
        await pool.query('DELETE FROM post WHERE id = $1', [id])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPost,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
