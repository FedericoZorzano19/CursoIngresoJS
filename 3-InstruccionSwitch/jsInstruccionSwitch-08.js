function mostrar()
{
	let calor;
	let frio;

	calor = document.getElementById("txtIdDestino").value;
	frio  = document.getElementById("txtIdDestino").value;

	switch (calor) {

		case "Bariloche":
		case "Usuahia":
			alert("Hace Frio");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
			break;
		



	}

}//FIN DE LA FUNCIÓN