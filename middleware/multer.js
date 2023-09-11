// const multer = require("multer");
// const path = require("path");

// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     const allowedFileTypes = ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx', '.txt'];
//     const ext = path.extname(file.originalname).toLowerCase();
    
//     if (allowedFileTypes.includes(ext)) {
//       cb(null, true); // Accept the file
//     } else {
//       cb(new Error("File type is not supported"), false); // Reject the file
//     }
//   },
// });
  
const multer = require("multer");
const path = require("path");

// Configuration for profile picture storage
const profilePicStorage = multer.diskStorage({
});

// File filter for profile picture uploads
const profilePicFileFilter = (req, file, cb) => {
  const allowedFileTypes = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedFileTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Profile picture file type is not supported"), false); 
  }
};

// Multer for profile picture uploads
const profilePicUpload = multer({
  storage: profilePicStorage,
  fileFilter: profilePicFileFilter,
});



              // Configuration for post image storage
const postUploadStorage = multer.diskStorage({
});

// File filter for post image uploads
const postUploadFileFilter = (req, file, cb) => {
  const allowedFileTypes = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedFileTypes.includes(ext)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Post image file type is not supported"), false); // Reject the file
  }
};

// Multer for post image uploads
const postUpload = multer({
  storage: postUploadStorage,
  fileFilter: postUploadFileFilter,
});



            // Configuration for document file storage
const documentUploadStorage = multer.diskStorage({
  // Your document storage configuration here
});

// File filter for document uploads
const documentUploadFileFilter = (req, file, cb) => {
  const allowedFileTypes = ['.pdf', '.doc', '.docx', '.txt'];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedFileTypes.includes(ext)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Document file type is not supported"), false); // Reject the file
  }
};

// Multer for document uploads
const documentUpload = multer({
  storage: documentUploadStorage,
  fileFilter: documentUploadFileFilter,
});

module.exports = { profilePicUpload, postUpload, documentUpload };
