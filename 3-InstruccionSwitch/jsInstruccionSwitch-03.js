function mostrar()
{
	//tomo el mes
	let mes;
	
	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":				
		case "Marzo":
		case "Abril":
	   case "Mayo":
		   case "Junio":
			case "Julio":	
			case "Agosto":
				case "Septiembre":
					case "Octubre":
					case " Noviembre":
					case "Diciembre":
						alert("Este mes tiene mas de 29 dias");
						break;
						case "Febrero":
							alert("este mes no tiene mas de 29 dias");
							break;

	}



	
	
	


}//FIN DE LA FUNCIÓN