
const router = require('express').Router();
const Post = require('../../models/Post');
// const withAuth = require('../../utils/auth')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        const posts = postData.map(post => post.get({ plain: true }))
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;