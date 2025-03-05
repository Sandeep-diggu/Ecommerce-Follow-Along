const multer = require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null__dirname, '../userImages')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  
  const uploadUserImage = multer({ storage: storage })

  module.exports = uploadUserImage;
