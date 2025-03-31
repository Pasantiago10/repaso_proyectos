//url 
let url = "https://omdbapi.com/?i=tt3896198&apikey=efac4154";

async function obtainmovie(t,y) {
  // arreglo vacio
  let movieandyear = [];

//segundo se agrega url con el parametro obligatorio titulo
let urlb  = `${url}&t=${(t)})`;
//se deja como no requerido los otros paametros para agregarlos en caso se inserten
if(y) 
   {urlb += `&y=${y}`

};

  //solicitud a la api con la url filtrada
  const response = await fetch(urlb);
  //se pasa la respuesta a json
  const data = await response.json();
 
  
    // Se agrega lo obtenido a mymovieen un solo push
    movieandyear.push({
      "Title": data.Title,
      "Year": data.Year,    
    });
  

  // Imprimmir el resultado obtenido
  console.log(movieandyear);
}

//se llma la funcion con los parametrosque quieras
obtainmovie( 'Avatar 2', '2022');
