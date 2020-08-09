/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numero;
	let seguir;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorPositivos = 0;
	let contadorCeros = 0 ;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;

	// generar un blucle del tipo mientras el usuario quiera
	do{
		//codigo dentro del bucle ( es el codigo que se debo realizar n cantidad de veces)
		numero = parseint(prompt("Ingrese un numero: "));

		// analizo el signo del numero
		if(  numero > 0){
// cuando sea positivo
// sumaPositivos
sumaPositivos += numero;
// contar positivos
contadorPositivos++;
		}
		else if( numero == 0)
		
		 {
			// cuando sea 0
			// contar los 0
			contadorCeros++;

		} 
		else{
			// negativo
			sumaNegativos += numero;
			//  cuento negativos
			contadorNegativos++;


		}
		//-------------------------
		// me fije si el numero es par y lo cuento
		if ( numero %2 ){
			contadorPares++;
		}

		seguir = prompt("Quiere ingresar otro numero?: ");


	}while ( seguir == `S`);


	// codigo despues del bucle ( se realiza una vez terminado el bucle)
	// hacer los calculos con los valores obtenidos dentro del bucle ( promedio y diferencia)

    if(contadorPositivos != 0 ){
	promedioPositivos = sumaPositivos / contadorPositivos;
	}
	
	if (contadorNegativos != 0){

	promedioNegativos = sumaNegativos / contadorNegativos;
	}


	diferencia = contadorPositivos - contadorNegativos;

	// mostrar informacion
	document.write("1.Suma de los negativos: " + sumaNegativos + "</br>");
	document.write("2-Suma de los positivos: " + sumaPositivos + "</br>");
	document.write("3-Cantidad de positivos: " + contadorPositivos + "</br>");
	document.write("4-Cantidad negativos: " + contadorNegativos + "</br>");
	document.write("5-Cantidad ceros: " + contadorCeros + "</br>");
	document.write("6-Cantidad pares: " + contadorPares + "</br>");
	document.write("7-Promedio positivos: " + promedioPositivos + "</br>");
	document.write("8-Promedio negativos: " + promedioNegativos + "</br>");
	document.write("9-Diferencia: " + diferencia );


	

	
}//FIN DE LA FUNCIÓN