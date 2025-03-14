//Hacer una funcion que reciba como parametro un array y que lo retorne al al reves, usando otro array auxiliar.

//A = [4, 8, 9, 5, 2]

//resultado = [2, 5, 9, 8, 4]

//se crea la variable AB con los siguientes elemewntos
ab = [120,100,80,60,40,20]
//se rcrea result como arreglo vacio
let result = [];

//se recorre el arreglo
for (let i = 0; i < ab.length; i++)  {
//se crea cpopia del arreflo AB y se guarda en result se invierte el arreglo
result = ab.slice().reverse();
}
//se imprime resultado
console.log(result);
