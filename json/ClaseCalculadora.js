class Calculadora{//Conjunto de operaciones
	constructor(_numero1,_numero2)
	{
		this.Numero1=_numero1;//Guarda el valor del primer número ingresado
		this.Numero2=_numero2;//Guarda el valor del segundo número ingresado
	}
	Suma()//Suma los valores
	{
		return parseInt(this.Numero1)+parseInt(this.Numero2);
	}
	Resta()//Resta los valores
	{
		return parseInt(this.Numero1)-parseInt(this.Numero2);
	}
	Multiplicacion()//Multiplica los valores
	{
		return parseInt(this.Numero1)*parseInt(this.Numero2);
	}
	Division()//Divide los valores
	{
		return parseInt(this.Numero1)/parseInt(this.Numero2);
	}
	

	Sumaasinc()
	{
		var objeto=this;
		return new Promise(function(resolve,reject)
		{
			try
			{
				resolve(parseInt(objeto.Numero1)+parseInt(objeto.Numero2));
			}
			catch(err)
			{
				reject(err.mesage)
			}
		});
	}
	Restaasinc()
	{
		var objeto=this;
		return new Promise(function(resolve,reject)
		{
			try
			{
				resolve(parseInt(objeto.Numero1)-parseInt(objeto.Numero2));
			}
			catch(err)
			{
				reject(err.mesage)
			}
		});
	}
	Multiplicacionasinc()
	{
		var objeto=this;
		return new Promise(function(resolve,reject)
		{
			try
			{
				resolve(parseInt(objeto.Numero1)*parseInt(objeto.Numero2));
			}
			catch(err)
			{
				reject(err.mesage)
			}
		});
	}
	Divisionasinc()
	{
		var objeto=this;
		return new Promise(function(resolve,reject)
		{
			try
			{
				resolve(parseInt(objeto.Numero1)/parseInt(objeto.Numero2));
			}
			catch(err)
			{
				reject(err.mesage)
			}
		});
	}
	Sumarajax(){
		var objetoenviar = this; //Toma el valor de la clase 
		return new Promise(function(resolve,reject){ //Realiza la promesa con 2 parámetros el que resuelve y el que imprime
			try{
				var xhr = new XMLHttpRequest(); //Se almacena en una variable un request de url
				xhr.open('POST', 'http://localhost:8080/Asumar'); //Abre la página en la que se suma
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText)); //Si no hay errores muestra la página
					}
					else
					{
						reject(xhr); //En caso de error muetra cuál es
					}
				};
				xhr.send(JSON.stringify(objetoenviar)); //Envía en un json la clase y sus resultados
			}
			catch(err){
				reject(err.message); //En caso de error al consultar lo muestra
			}
		});
	}

	Restaajax(){ 
		var objetoenviar = this; //Toma el valor de la clase 
		return new Promise(function(resolve,reject){ //Realiza la promesa con 2 parámetros el que resuelve y el que imprime
			try{
				var xhr = new XMLHttpRequest(); //Se almacena en una variable un request de url
				xhr.open('POST', 'http://localhost:8080/Arestar'); //Abre la página en la que se suma
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText));  //Si no hay errores muestra la página
					}
					else
					{
						reject(xhr); //En caso de error muetra cuál es
					}
				};
				xhr.send(JSON.stringify(objetoenviar)); //Envía en un json la clase y sus resultados
			}
			catch(err){
				reject(err.message); //En caso de error al consultar lo muestra
			}
		});
	}

	Multiplicarajax(){
		var objetoenviar = this; //Toma el valor de la clase 
		return new Promise(function(resolve,reject){ //Realiza la promesa con 2 parámetros el que resuelve y el que imprime
			try{
				var xhr = new XMLHttpRequest(); //Se almacena en una variable un request de url
				xhr.open('POST', 'http://localhost:8080/Amultiplicar'); //Abre la página en la que se suma
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText)); //Si no hay errores muestra la página
					}
					else
					{
						reject(xhr); //En caso de error muetra cuál es	
					}
				};
				xhr.send(JSON.stringify(objetoenviar)); //Envía en un json la clase y sus resultados
			}
			catch(err){
				reject(err.message); //En caso de error al consultar lo muestra
			}
		});
	}

	Dividirajax(){
		var objetoenviar = this; //Toma el valor de la clase 
		return new Promise(function(resolve,reject){ //Realiza la promesa con 2 parámetros el que resuelve y el que imprime
			try{
				var xhr = new XMLHttpRequest(); //Se almacena en una variable un request de url
				xhr.open('POST', 'http://localhost:8080/Adividir'); //Abre la página en la que se suma
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						resolve(JSON.parse(xhr.responseText)); //Si no hay errores muestra la página
					}
					else
					{
						reject(xhr); //En caso de error muetra cuál es	
					}
				};
				xhr.send(JSON.stringify(objetoenviar)); //Envía en un json la clase y sus resultados
			}
			catch(err){
				reject(err.message); //En caso de error al consultar lo muestra
			}
		});
	}
}

let G_Numero1=0;
let G_Numero2=0;
let G_Signo="";

function numeros(numero){//Escribe números en la pantalla

	if(document.getElementById('numintrod').value==0){
		document.getElementById('numintrod').value=numero;			
	}else{
		document.getElementById('numintrod').value=document.getElementById('numintrod').value+numero;
	}
}

function signo(operacion){//Guarda el valor del primer número y la operación a realizar, después limpia la pantalla
	G_Numero1=document.getElementById('numintrod').value;
	G_Signo=operacion;
	document.getElementById('numintrod').value="0";
}

function igual(){//Guarda el valor del segundo número y envía los valores para realizar la operación
	G_Numero2=document.getElementById('numintrod').value;
	let claseinstanciada= new Calculadora(G_Numero1,G_Numero2);

	switch(G_Signo){

		case 'Suma'://En caso de ser una suma envía los valores a la función de sumar
			claseinstanciada.Sumarajax().then(function(response)//Envia los datos a la funcion asincrona de la suma
				{
					document.getElementById('numintrod').value=response;//Recibe el resultado de la suma y lo muestra en pantalla
				},function(error)
				{
					document.getElementById('numintrod').value="Error";//En caso de error muestra un mensaje
				});
		break;

		case 'Resta'://En caso de ser una resta envía los valores a la función de restar
			claseinstanciada.Restaajax().then(function(response)//Envia los datos a la funcion asincrona de la reta
				{
					document.getElementById('numintrod').value=response;//Recibe el resultado de la resta y lo muestra en pantalla
				},function(error)
				{
					document.getElementById('numintrod').value="Error";//En caso de error muestra un mensaje
				});
		break;

		case 'Division'://En caso de ser una división envía los valores a la función de dividir
			claseinstanciada.Dividirajax().then(function(response)//Envia los datos a la funcion asincrona de la división
				{
					document.getElementById('numintrod').value=response;//Recibe el resultado de la división y lo muestra en pantalla
				},function(error){
					document.getElementById('numintrod').value="Error";//En caso de error muestra un mensaje
				});
		break;

		case 'Multiplicacion'://En caso de ser una multiplicación envía los valores a la función de multiplicar document.getElementById('numintrod').value=claseinstanciada.Multiplicacion();
			claseinstanciada.Multiplicarajax().then(function(response)//Envia los datos a la funcion asincrona de la multiplicación
				{
					document.getElementById('numintrod').value=response;//Recibe el resultado de la multiplicación y lo muestra en pantalla
				},function(error){
					alert("No se pudo prro");//En caso de error muestra un mensaje
				});
		break;
	}
}

function limpiar(){//Limpia los valores de la pantalla
	document.getElementById('numintrod').value="0";
}0