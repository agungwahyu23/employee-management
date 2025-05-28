const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('File harus berupa gambar'), false);
};

const upload = multer({
    storage: storage,
    limits: {fileSize: 1 * 1024 * 1024},
    fileFilter: fileFilter
});

module.exports = upload;