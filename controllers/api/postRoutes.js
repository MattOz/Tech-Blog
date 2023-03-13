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

// delete a post
router.delete('/:id', async (req, res) => {
    try {
        const reviewData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!reviewData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// edit post
router.put('/:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        },
    })
        .then(review => res.json({ msg: "updated post" }))
        .catch(err =>
            res.status(400).json({ error: "unable to update post" }))
});

module.exports = router;