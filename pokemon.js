
let  name = 'Latios';

//se extraren valores de la url
const url1 = new URL("https://pokeapi.co/api/v2/pokemon/?name=pikachu&type=electric");
function obtainpokemon(url) {
  const params = new URLSearchParams(url.search); 
  const pokemon = Array.from(params.values());
  return pokemon;
}
console.log(obtainpokemon(url1));

const url2 = new URL("https://pokeapi.co/api/v2/pokemon/?ability=overgrow&hidden=true");
function obtainability(url) {
  const params = new URLSearchParams(url.search); 
  const abilities = Array.from(params.values());
  return abilities;
}
var poke_array = pokemon.filter(function(val) {
  return url2.indexOf(val) !== -1;
});

console.log(poke_array)

console.log(obtainability(url2));
