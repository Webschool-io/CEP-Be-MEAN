const mongoose 			 = require('mongoose')
const mongooseRedisCache = require("mongoose-redis-cache")

const online = false;
const url =  online ? '' : 'mongodb://localhost/seed-atomic';

mongoose.Promise = require('bluebird')

mongoose.connect(url)


.then(() =>{
	mongoose.connection.on('error', err =>{
		console.log(`mongoose connection: `+err)
	})
	mongoose.connection.on('reconnected', ()=> {
		console.log('Reconnected to MongoDB');
	});
	console.log('Mongodb Conectado : )')
})
.catch(err => {
	console.log(`rejected promise ${err}`)
	mongoose.disconnect()      
})


const host =  online ? '' : 'localhost';
const port =  online ? '' : '';
const pass =  online ? '' : '';

  mongooseRedisCache(mongoose, {
    host: host,
    port: port,
    pass: pass,
    cache: true
  })


process.on('SIGINT', ()=> {
	mongoose.connection.close(()=> {
		console.log('Mongodb: bye : )');
		process.exit(0);
	});
});


module.exports = mongoose;

