function mostrar()
{
	//tomo el mes
	let mes;

 mes = document.getElementById("txtIdMes").value;

 switch(mes){
	 case "Enero":
	 case "Febrero":
	 case "Marzo":
	 case "Abril":
	case "Mayo":
		case "Junio":
			alert("falta para el invierno");
			break;
	 case "Julio":	
	case "Agosto":
		alert("Abrigate que hace frio")
		break;
		case "Septiembre":
		case "Octubre":
		case " Noviembre":
		case "Diciembre":
 
		alert("ya pasamos el frio ahora hace calor");
		break;

		
 }


	




}