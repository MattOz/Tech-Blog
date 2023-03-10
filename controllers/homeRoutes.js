const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// home route, gets all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    console.log(postData);
    const posts = postData.map(post => post.get({plain:true}))
    res.render('homepage', {posts, loggedIn: req.session.loggedIn})
  } catch(err){
    res.status(500).json(err);
  }
});

// route for user dashboard
router.get('/dashboard', async (req, res) => {
  try {
    // const postData = await Post.findByPk(req.session.userId);\
    console.log(req.params.userId)
    const postData = await Post.findAll({ where: { userId: req.session.userId } });
    console.log(postData);
    console.log("print out posts")
    const posts = postData.map(post => post.get({plain:true}))
    console.log(posts);
    res.render('dashboard', {posts, loggedIn: req.session.loggedIn })
  } catch(err){
    res.status(500).json(err);
  }
});

// route for login/signup page
router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch(err){
    res.status(500).json(err);
  }
});

// route for log out page
router.get('/logout', async (req, res) => {
  try {
    res.render('logout')
  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;