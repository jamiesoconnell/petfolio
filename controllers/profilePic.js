const cloudinary = require("../middleware/cloudinary");
const ProfilePic = require("../models/ProfilePic");

module.exports = {
  getProfilePic: async (req, res) => {
    try {
      const profilePic = await ProfilePic.findOne({ user: req.user.id });
      res.render("profile.ejs", { profilePic: profilePic,});
    } catch (err) {
      console.error(err);
    }
  },
  
  createProfilePic: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await ProfilePic.create({
        petName: req.body.petName,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
      });
      console.log("Profile Pic has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
    
};
