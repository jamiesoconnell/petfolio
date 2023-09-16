const express = require("express");
const router = express.Router();
const { documentUpload } = require("../middleware/multer");
const documentsController = require("../controllers/documents");
const { ensureAuth } = require("../middleware/auth"); // You can remove ensureGuest if authentication is required

// Document Routes
router.get("/:id", ensureAuth, documentsController.getDocument);
router.post("/createDocument", documentUpload.single("file"), documentsController.createDocument);

module.exports = router;
