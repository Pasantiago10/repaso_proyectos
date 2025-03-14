//elements presemts a array

// Definimos variables
let a = ["Neteyam", "lo'ak"];
let b = ["ronal", "tonowari", "anoung", "tsireya", "roxto", "Neteyam", "lo'ak", "Neteyam", "lo'ak"];
let result = []; 
//ciclos
  
 for  (let i = 0; i < a.length; i++)  {
  result[i]= 0;
  for  (let j = 0; j < b.length; j++)  {
  if (a[i] == b[j])
{
//si el elemento esta deejara de sumar ciando sean igual
  result[i] = result[i] + 1;
  }
  }
}
//imprimimos resultado
console.log(result)



