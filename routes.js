module.exports = (app)=>{
	require ('./modules/index/routes/index')(app)
	require ('./modules/zipcode/routes/index')(app)
}