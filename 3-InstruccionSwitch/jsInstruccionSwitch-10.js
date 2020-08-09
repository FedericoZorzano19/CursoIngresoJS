function mostrar()
{
	 estacionIngresada = document.getElementById("txtIdEstacion").value;
	 destino = document.getElementById("txtIdDestino").value
	let estacion;
	let destino;

	switch(estacion){
		case"Invierno":
		if(destino == "Bariloche"){
			alert("Se viaja");
		}
		else{
			alert("No se viaja");
		}
		break;
		case"Verano":
		if(destino == "Mar del plata" || destino == "Cataratas"){
			alert("Se viaja");
		}
		else{
			alert("No se viaja");
		}
		break;
		case"Otoño":
		alert("Se viaja");
		break;
		case"Primavera":
		if(destino == "Bariloche"){
			alert("Se viaja");
		}
		break;
		
	}

	alert(estacionIngresada);

}//FIN DE LA FUNCIÓN