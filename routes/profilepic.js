const express = require("express");
const router = express.Router();
const { profilePicUpload } = require("../middleware/multer"); // Import profilePicUpload middleware
const profilePicController = require("../controllers/profilePic");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//profile pic routes
router.get("/:id", ensureAuth, profilePicController.getProfilePic);

router.post("/createProfilePic", profilePicUpload.single("file"), profilePicController.createProfilePic);


module.exports = router;