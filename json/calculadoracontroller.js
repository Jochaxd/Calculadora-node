class _Operacion{
	constructor(_numero1,_numero2){
		this.numero1 = parseInt(_numero1);
		this.numero2 = parseInt(_numero2);
	}
	Sumar()//Función para sumar números
	{
		return this.numero1 + this.numero2;
	}
	Restar()//Función para restar números
	{
		return this.numero1 - this.numero2;
	}
	Multi()//Función para multiplicar números
	{
		return this.numero1 * this.numero2;
	}
	Div()//Función para dividir números
	{
		return this.numero1 / this.numero2;
	}
}
exports.Sumar= function(req, res){//Se realiza la suma y se guarda el resultado en un json
	let claseinstanciada = new _Operacion(req.body.Numero1, req.body.Numero2);
	res.json(claseinstanciada.Sumar());
}

exports.Restar= function(req, res){//Se realiza la resta y se guarda el resultado en un json
	let claseinstanciada = new _Operacion(req.body.Numero1, req.body.Numero2);
	res.json(claseinstanciada.Restar());
}

exports.Multi= function(req, res){//Se realiza la multiplicación y se guarda el resultado en un json
	let claseinstanciada = new _Operacion(req.body.Numero1, req.body.Numero2);
	res.json(claseinstanciada.Multi());
}

exports.Div= function(req, res){//Se realiza la división y se guarda el resultado en un json
	let claseinstanciada = new _Operacion(req.body.Numero1, req.body.Numero2);
	res.json(claseinstanciada.Div());
}