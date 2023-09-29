const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

// Define the route to fetch a dog fact
router.get('/', postsController.getFeed);;

module.exports = router;
