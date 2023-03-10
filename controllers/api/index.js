const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', loginRoutes);
router.use('/posts', postRoutes);

module.exports = router;
