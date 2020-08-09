function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >=18 ) {

		alert("Es mayor de edad")

	}
 else

	if ( edad >= 13 && edad <= 17) {

		alert("Es adolecente")
	}
else 

	if ( edad <= 13 ) {

		alert("Es menor de 13 años")
	}

	alert("Fin de la funcion")


}//FIN DE LA FUNCIÓN