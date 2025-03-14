//definimos elementos arrray1

let array1 = [];
array1.push(1,2,3,4,5);
console.log(array1)
//definimos elementos arrray12

let array2 = [];
array2.push(40,50,10,45,23);
//definimos array3 como vacio
array3 = [];
console.log(array2)
//recorremos array 1 y lo recorrido se suma con lo de array2 y se  guarda el resultado em array3 que antes era vacio ahora contendra el resultado de la suma
for  (let i = 0; i < array1.length; i++)  {
      array3[i]  = (array1[i] + array2[i]);

        
}

//imprimomos resultado con console.log

    console.log(array3)
