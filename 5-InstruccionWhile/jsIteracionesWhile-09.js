/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
let numero;
let	maximo;
let	minimo;
let seguir;
let flag = 0;
// generar un bucle del tipo mientras el usuario quiera (do while)
do{ // dentro del bucle
	// pido numero
	numero = parseInt(prompt("Ingrese un numero: "));
	// tengo que averiguar si es la primera iteracion 
	if( flag == 0){
		// si es la primer iteracion , inicializo max y min con ese numero
		maximo = numero;
		minimo = numero;
     flag = 1;
	}
	//en las restantes iteraciones hay que compararlo contra el maximo anterior y contra el minimo superior
	// si tengo un nuevo maximo o un nuevo minimo actualizo segun corresponda
	if ( numero > maximo ){
		maximo = numero;
	}
	if( numero < minimo){
		minimo = numero;
	}
	seguir = parseInt(prompt("ingrese otro numero: "));
} while(seguir == `s`);

//mostrar los resultados
document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;
	

}//FIN DE LA FUNCIÓN