
//Verifica Se o numero é par
var verificaPar= function(numero){
	if(numero%2===0){
		return true;
	}
	else{;
		return false;
	}
};
//Verifica se o numero é impar
var verifica= function(vetor){
var verifica=[], impar=[],par=[];
var cond;
	for (var i = 0;  i <= vetor.length; i++) {
		cond=verificaPar(vetor[i]);
		if (cond==true) {
			par.push(vetor[i]);
		}
		else{
			impar.push(vetor[i]);
		}
	} 
	verifica[1]=par;
	verifica[2]=impar;
	return verifica // Mandando o ventor com os vetores de par e impar dentro.
};

/* comecando o codigo*/
var vetor=[], pares=[], impares=[], todos=[];// Vetor de entrada e os de 
											//	Armazenamento

for (var i = 0; i <10 ; i++) {
		vetor[i]=i;
} // carregando os valores de 1 a 10 
 todos= verifica(vetor);// enviando vetor e recebendo os numeros pares
impares=todos[2];
pares=todos[1];

	// imprimindo os valores do vetor atualizado
	console.log(" imprimindo todos numeros pares "+ pares);
	console.log(" imprimindo todos numeros impares "+ impares);
