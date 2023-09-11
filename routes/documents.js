const express = require("express");
const router = express.Router();
const { documentUpload } = require("../middleware/multer"); // Import documentUpload middleware
const documentsController = require("../controllers/documents"); 
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Document Routes
router.get("/:id", ensureAuth, documentsController.getDocument); 
router.post("/createDocument", documentUpload.single("file"), documentsController.createDocument);
// router.delete("/deleteDocument/:id", documentsController.deleteDocument); 

module.exports = router;
