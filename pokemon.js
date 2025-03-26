
// se crea la fucion para pedor la api de pokemon
const catchpokemon = async (name) => {
  let url1 = `https://pokeapi.co/api/v2/pokemon/${name}`

  try {
    //peticion api
    const response = await fetch(url1);
    
   
    //error si la resṕueta no es exacta
    if (!response.ok) {
      throw new Error (`Error al obtener al pokemon: ${response.statusText}`);
    }
   //se parsea a json
    const data = await response.json();
  /*se crea el arreglo
    let poke_array = [];
    //se guarda arreglo con datos

    for(var i = 0; i < response.length; i++){
      var item = response[i]['name'] + ',' + response[i]["abilities"];
      poke_array.push(item);
      console.log(poke_array)

    }*/

    //extraer valores
    const name = data.name
    const abilities = data.abilities.map(ability =>  ability.ability.name)

//se develve un objeto con los valores
return {
  name: name,
  abilities: abilities,

}



} catch (error) {
    console.error('Error fetching data:', error);
  }

}; 


//se llama la funcion por un nombre en especifico
catchpokemon('pikachu').then(data => {
  if(data) {
  console.log(`name: .${data.name}`);
  console.log('abilities:', data.abilities.join(','))
  }
});



