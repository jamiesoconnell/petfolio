const cloudinary = require("../middleware/cloudinary");
const ProfilePic = require("../models/ProfilePic");
const Post = require("../models/Post");
const Document = require("../models/Document");
const fetch = require('node-fetch');

module.exports = {
  getProfilePic: async (req, res) => {
    try {
      const profilePic = await ProfilePic.findOne({ user: req.user.id });
      const posts = await Post.find({ user: req.user.id }).lean();
      const documents = await Document.find({ user: req.user.id }).lean(); 

      const dogFactResponse = await fetch('https://dog-facts2.p.rapidapi.com/facts', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fd629c21camshb7c2eec48d414b6p107476jsn8cb90aeb1837',
          'X-RapidAPI-Host': 'dog-facts2.p.rapidapi.com',
        },
      });
      const dogFactData = await dogFactResponse.json();

      res.render("profile.ejs", { profilePic: profilePic, posts: posts, documents: documents, user: req.user, dogFact: dogFactData });
      console.log(dogFactData)


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
