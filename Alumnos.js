
// Se definen las variables vacias
let Apprentices =[];
let Ages =[];

// se insertan datos en ñas las variables
Apprentices.push("Lionel Messi", "Nancy Cartwhight", "Pamela Smith", "Julie Kavner", "Jim Carrey","*");
Ages.push(12, 24, 18, 20, 12,11);

// Se define el array para almacenar los alumnos mayores de 18 años
let ApprenticesOver18 = [];

// Recorremos ambos arreglos con el mismo índice
for (let i = 0; i < Apprentices.length; i++) {
  if (Ages[i] >= 18) { 
    ApprenticesOver18.push(Apprentices[i] +" "+ Ages[i]); 
  }
}

// Mostramos los resultados
console.log("Lista de aprendices:", Apprentices);
console.log("Edades:", Ages);
console.log("Mayores de 18 años:", ApprenticesOver18);
 