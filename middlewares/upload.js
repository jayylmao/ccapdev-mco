const multer = require('multer');       // A middleware primarily used for uploading files
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',   // Directory to save the files (profile and background)
    /*  A function that determines the name of the uploaded file
            req: The request object.
            file: The uploaded file object.
            cb: A callback function to call once the filename is determined.
    */
    filename: (req, file, cb) => {
        /*  file.fieldname: The name of the form field 
            Date.now(): The current timestamp to ensure uniqueness
            path.extname(file.originalname): The file extension of the original file
        */
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


// Check file type
const checkFileType = (file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;                                           // Ensures that only specific image files are uploaded.
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());  // Extracts the file extension from the original filename and checks if it matches the allowed types (filetypes)
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname)
        return cb(null, true);
    else 
        cb('Error: Images Only!');
}


// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },      // Limit file size to 1MB
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
    }).fields([                         // Specifies that the form will have multiple file fields profileImg and backgroundImg
        { name: 'profileImg', maxCount: 1 },
        { name: 'backgroundImg', maxCount: 1 }
]);

module.exports = upload;
