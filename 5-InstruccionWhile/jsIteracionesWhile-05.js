/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese sexo en F si es mujer o en M si es hombre");
	while( sexo == "F" || sexo == "M") {
alert("Sexo correcto");
	}
	
	sexo = prompt("Intente nuevamente");
	document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN