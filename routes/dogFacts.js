const express = require('express');
const router = express.Router();
const profilePicController = require('../controllers/profilePic');

// Define the route to fetch a dog fact
router.get('/', profilePicController.getProfilePic);;

module.exports = router;
