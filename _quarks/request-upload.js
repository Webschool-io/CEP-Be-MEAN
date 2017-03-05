module.exports = ()=>{
	const multer = require('multer')
	const path   = require('path')
	const crypto = require('crypto')
	const storage = multer.diskStorage({
		destination: 'public/imagens/',
		filename: function (req, file, cb) {
			crypto.pseudoRandomBytes(16, function (err, raw) {
				if (err) return cb(err)
					cb(null, raw.toString('hex') + path.extname(file.originalname))
			})
		}
	});
	return storage;
}