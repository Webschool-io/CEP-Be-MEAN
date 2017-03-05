const path = require('path')
module.exports =  (app) => {  
  app.route('/')
  	 .get((req,res)=> res.sendFile(path.join(__dirname, '../../../public/paginas/', 'docs.html'))  )

  app.route('/api')
  	 .get((req,res)=> res.json({msg: 'Bem vindo Api'}))

}