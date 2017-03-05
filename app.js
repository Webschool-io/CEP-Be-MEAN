'use strict'
const express     	 = require ('express')
const path      	 = require ('path')
const morgan   	 	 = require ('morgan')
const bodyParser  	 = require ('body-parser')
const cors			 = require ('cors')
const http 		 	 = require ('http')
const cluster     	 = require ('cluster')
const validator      = require ('express-validator')
const mongo 		 = require ('./_config/mongoDB')

const app = express();

app.set('superSecret', '1a5H(qzO&1+!8M35tXvai3A*JF%Os]eOoG63/Oo+:1S(R[%x[js09UKDam0#85'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));



app.set('port', (process.env.PORT || 3000));

const port = app.get('port')
const server = http.createServer(app);

require('./routes')(app)



server.listen(port, () => console.log('Servidor rodando na porta: %d', port))
