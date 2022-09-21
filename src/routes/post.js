const express = require('express');

const feedController = require('../controllers/post');

const router = express.Router();// create a router

router.get('/post',feedController.getPosts);


router.post('/post',feedController.createPost);

router.put('/post/:id',feedController.updatePost);

router.delete('/post/:id',feedController.deletePost);

router.get('/post/:id',feedController.findById);

module.exports = router;


