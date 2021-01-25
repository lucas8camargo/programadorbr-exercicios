// 1 - Escreva uma função que receba dois números e retorne o maior deles

function maior_entre_dois(n1, n2){

	if (n1 > n2){
		return n1
	}
	else{
		return n2
	}
}

// 2 - Escreva uma função que receba um Array com 3 números e imprima eles em ordem


function ordena_array(array){

	console.log(array.sort(function(a, b){return a-b}))
}

// 3 - Escreva uma função que receba um Array com 5 números e retorne o maior deles

function maior_valor_array(array){

	array.sort(function(a, b){return a-b})

	return array[0]
}

// 4 - Escreva uma função que receba um Array com 5 números e retorne a média deles

function media_do_array(array){
	let soma = 0

	for (let i of array){
		soma += array[i]
	}

	return soma / array.length
}

// 5 - Escreva uma função que receba um número e imprima se ele é par ou ímpar

function par_ou_impar(n){

	if (n % 2 == 0){
		console.log("Par")
	}
	else{
		console.log("Ímpar")
	}
}

// 6 - Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar

function multiplo_4(){

	let multiplo4 = []

	for (let i = 0; i < 101; i++){
		multiplo4.push(4 * i)
		if (multiplo4.includes(i)){
			console.log("pi")
		}
		else{
			console.log(i)
		}
	}
}

// 7 - Escreva uma função que receba um objeto e imprima suas propriedades

function obj_propriedades(obj){

	let propriedades = []

	for (let i in obj){
		propriedades.push(i)
	}

	console.log(propriedades)
}

// 9 - Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade

function array_de_obj(x){

	var alturas = []
	var idades = []

	for (var i in x){

	alturas.push(x[i].altura)
	idades.push(x[i].idade)
}

	alturas.sort(function(a, b){return b-a})
	console.log("Maior altura: " + alturas[0])

	alturas.sort(function(a, b){return a-b})
	console.log("Menor altura: " + alturas[0])

	var soma_idade = 0
	for (var i in x){

		soma_idade += idades[i]
	}

	console.log("Média das idades: " + soma_idade / x.length)
}