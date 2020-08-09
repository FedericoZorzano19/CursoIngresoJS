function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;

	nota = Math.round(Math.random()  * 9 + 1); 

	if(    nota >= 9  ){

	
		
		alert("excelente.nota=" + nota);
	}

		else if(nota >= 4){

			alert("Aprobo.Nota=" + nota);

		}

		else 
		{
		
		alert("vamos la proxima se puede.nota= " + nota);
		}


		





}//FIN DE LA FUNCIÓN