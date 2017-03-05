const qr = require('qr-image')
const fs = require('fs')

module.exports = (Organelles)=>{
	const qr = require('qr-image')
	const fs = require('fs')
	var qr_svg = qr.image(Organelles._id.toString(), { type: 'png' });
	qr_svg.pipe(fs.createWriteStream('public/imagens/'+ Organelles._id.toString()+ '.png'));
}