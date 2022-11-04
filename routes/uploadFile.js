const router = require("express").Router()
const {protect} = require("../front-end/src/middleware/authMiddleware")
const crypto = require('crypto')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')

const URI = "mongodb+srv://brianozhang:869323246@cluster0.ima9o2n.mongodb.net/test"

// Create db connection
const conn = mongoose.createConnection(URI);

// Init gfs
let gfs, gridfsBucket;

conn.once('open', () => {
// Init stream
gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
  bucketName: 'uploads'
});
gfs = Grid(conn.db, mongoose.mongo);
gfs.collection('uploads');
})

// Create storage engine
const storage = new GridFsStorage({
url: URI,
file: (req, file) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        return reject(err);
      }
      const filename = buf.toString('hex') + path.extname(file.originalname);
      const fileInfo = {
        filename: filename,
        bucketName: 'uploads'
      };
      resolve(fileInfo);
    });
  });
}
});
const upload = multer({ storage });

router.post("/", upload.single('file'), (req, res) => {
    res.json({file : req.file})
})

// router.get("/", protect, projectDisplay)
// @route GET /image/:filename
// @desc Display Image
router.get('/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    const readstream = gridfsBucket.openDownloadStreamByName(file.filename);
    readstream.pipe(res);
  });
});



module.exports = router