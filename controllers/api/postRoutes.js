const router = require('express').Router();
const Post = require('../../models/Post');
// const withAuth = require('../../utils/auth')

// new post
router.post('/:id', async (req, res) => {
    try {
        const newPost = await Post.create({
            userId: req.session.userId,
            title: req.body.postTitle,
            body: req.body.postInput,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;