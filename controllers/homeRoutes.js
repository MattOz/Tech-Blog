const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// home route, gets all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    const posts = postData.map(post => post.get({plain:true}))
    res.render('homepage', {posts})
  } catch(err){
    res.status(500).json(err);
  }
})

// route for user dashboard
router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard')
  } catch(err){
    res.status(500).json(err);
  }
})

// route for login/signup page
router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch(err){
    res.status(500).json(err);
  }
})

// route for log out page
router.get('/logout', async (req, res) => {
  try {
    res.render('logout')
  } catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;