const express = require("express");
const router = express.Router();
const { profilePicUpload } = require("../middleware/multer"); // Import profilePicUpload middleware
const profilePicController = require("../controllers/profilePic");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, profilePicController.getProfilePic);

router.post("/createProfilePic", profilePicUpload.single("file"), profilePicController.createPost);

module.exports = router;