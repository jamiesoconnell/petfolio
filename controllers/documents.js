const cloudinary = require("../middleware/cloudinary");
const Document = require("../models/Document");

module.exports = {
  getDocument: async (req, res) => {
    try {
      const document = await Document.findById(req.params.id);
      res.render("documents.ejs", { document: document, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  createDocument: async (req, res) => {
    try {
      console.log(req.file);

      const file = req.file; 

      console.log(req.files);

      const result = await cloudinary.uploader.upload(req.file.path);

      await Document.create({
        documentName: req.body.documentName,
        fileUrl: result.secure_url,
        fileType: file.mimetype,
        fileSize: file.size,
        description: req.body.description,
        user: req.user.id,
      });

      console.log("Document has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.error(err);
      res.redirect("/profile");
    }
  },
};
