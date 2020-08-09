/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let positivos = 0;
	let negativos = 1;
	let flag = 0;
	let seguir;

	do{

		numero = parseInt(prompt("ingrese un numero: "));


		if(numero >= 0){
		positivos =	positivos + numero;

		}
		else{
			negativos = negativos * numero;
			flag = 1;

		}



		seguir = prompt("Quiere ingresar otro numero?: ");
	}while (seguir == `s`);

	if(flag == 0){
		negativos = 0;
		// si entro aca es porque el usuario no ingreso ningun numero negativo
		//
	}
	negativos.getElementById("txtIdProducto").value = negativos;
	

	document.getElementById("txtIdSuma").value = positivos;
	// si el usuario no ingreso ningun negativo tengo que asignar  0 al valor de negativos.
	

}//FIN DE LA FUNCIÓN


// declarar variables
//genero un bucle de tipo mientras el usuario quiera (do while)
// --- dentro del bucle ---
// pido numero
// acumulo el numero donde corresponda
// --- despues del bucle
// mostramos los resultados