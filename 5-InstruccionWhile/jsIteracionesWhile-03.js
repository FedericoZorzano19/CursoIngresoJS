/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	
	clave = prompt("ingrese el número clave.");

	while( clave != "utn750" ){// la condicion debe ser verdadera cuando ....
		//informo dato invalido
		// lo pido nuevamente
		
		clave = prompt(" clave incorrecta . Ingrese nuevamente la clave: ");
	}
	
	// dato valido ya puedo utilizarlo
	alert("Clave Correcta!!");
	
}//FIN DE LA FUNCIÓN
