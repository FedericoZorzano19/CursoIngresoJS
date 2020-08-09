function mostrar()
{
	//tomo el mes
	let  mes;
	mes = document.getElementById("txtIdMes").value;

	switch (mes) {

		case "Febrero":
			alert("28 dias");
			break;
			case "Abril":
			case "Julio":
			case "Septiembre":			
			case "Noviembre":
							alert("30 Dias");
							break;

							default:(" 31 dias");
	}

	alert(mes);
	
	



}