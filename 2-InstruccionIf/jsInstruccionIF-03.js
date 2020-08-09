function mostrar()
{
 
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= 18 ) {

		alert("Es mayor de edad");

	}
	
	else

	if ( edad <= 18 ) {

		alert("Es menor de edad");
	}

	alert("Fin de la Funcion");

}   