var controllercalculadora = require('./calculadoracontroller.js');
module.exports = function(app){
	app.post('/Asumar',controllercalculadora.Sumar);//crea un url
	app.post('/Arestar',controllercalculadora.Restar);//crea un url
	app.post('/Amultiplicar',controllercalculadora.Multi);//crea un url
	app.post('/Adividir',controllercalculadora.Div);//crea un url

	app.get('*',function(req,res){
		res.sendfile('./login.html');//Carga única de la vista'
	});
};//Se pone ; al erminar un module