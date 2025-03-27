//variable name
let name = 'latios';

//urls
const url1 = "https://pokeapi.co/api/v2/pokemon/";
const url2 = "https://pokeapi.co/api/v2/ability/";

//funcion para definir al pokemon y sus habilidades y definir los pokemons hermanos que compartan esa habilidad
async function obtainpokemon(name) {
  //varibles a usar
  let pokerray = [];
  const pokeparners = []
  //se trae la url con la datos del pokemon filtrados por nombre
  const response = await fetch(url1+name);
  //se pasa data a json
  const data = await response.json();
  //se inserta en el array inal el parametro name 
pokerray.push({"name": data.name});
//se crea el la varable abilities
const abilities = [];
//se recorre e inserta el valor de abilities en la variable
for(let i = 0; i<data.abilities.length; i++) {
  abilities.push(data.abilities[i].ability.name);
}
//se inserta el valor en la varianble de abilities
pokerray.push({"abilites": abilities});
// recorremos abilidades que tambien estan en la url2
for(let i = 0; i < abilities.length; i++) {
  const parnerAbilities = await fetch(url2+abilities[i])
//se transforman en  json
  const data = await parnerAbilities.json();
  //se recorre el arreglo 2 tranformado en json y se insertan los nombres de los pokemon

  for(let j = 0; j<data.pokemon.length; j++){
  pokeparners.push(data.pokemon[j].pokemon.name)
  }
}//se inserta compaeros al arreglo final
pokerray.push({ "parners": pokeparners});
//se imprime el valor de pokearray
console.log(pokerray)

}
//se llama a la funcion
obtainpokemon("latios")

