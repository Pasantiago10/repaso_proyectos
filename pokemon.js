//urls
const url1 = "https://pokeapi.co/api/v2/pokemon/";
const url2 = "https://pokeapi.co/api/v2/ability/";

//funcion para definir al pokemon y su habilidades
  async function fetchData(name) {
    ///varables a usar
    let pokearray = [];
    const pokeparners = []
    //se trae la url con los datos del pokemon filtrado por nombre

    const response = await fetch(url1+name); 
  //se pasa dato a json
    const data = await response.json(); 
    //se intsrrta en el arrayfinal el primer parametro

    pokearray.push({"name": data.name})
    //se crea la vroable habolities;
    const abilities = [];
    //se recorre he inserta el valor de abilities en su variable
    for(let i=0; i<data.abilities.length; i++){    
        abilities.push(data.abilities[i].ability.name);
    }
    //se inserta abilities en pokarray
    pokearray.push({"abilities": abilities});
    // recorremos abilidades que tambien estan en la url2
    for (let i = 0; i < abilities.length; i++) {
        const partnersAbilities  = await fetch(url2+abilities[i]);
        //se tranaforma en json
        const data = await partnersAbilities.json();
        //se recorre elarreglo 2 transformado en json y se insetan los valores a pokeparners 
        for(let j=0; j<data.pokemon.length; j++){
           pokeparners.push(data.pokemon[j].pokemon.name);
        }
    }//se insetan compañeros al arreglo final
    pokearray.push({"partners": pokeparners});
    //se imprime resultados
    console.log(pokearray);
}
//se llama la funcion con el nombre del pokemon
fetchData("Arceus");

