'use strict'
const pass = require('../_quarks/password')

function configPass (v) {
	return pass.hash(v);
}

module.exports = {
		type: String, required: true, set: configPass
}


