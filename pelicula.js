//url 
const url = "https://omdbapi.com/?i=tt3896198&apikey=efac4154";

async function obtainmovie(t, y, plot, type) {
  // arreglo vacio
  let mymovie = [];

  //url inicial
  let urlb = url;

  //primer parametro que es titulo
  if (t) {
    urlb += `&t=${encodeURIComponent(t)}`;
  }

//seundo parametro que es año
  if (y) {
    urlb += `&y=${encodeURIComponent(y)}`;
  }

//tercr parametro que es plot
  if (plot) {
    urlb += `&plot=${encodeURIComponent(plot)}`;
  }
//ltimo parametro que es type
  if (type) {
    urlb += `&type=${encodeURIComponent(type)}`;
  }

  //solicitud a la api con la url filtrada
  const response = await fetch(urlb);
  //se pasa la respuesta a json
  const data = await response.json();
 
  
    // Se agrega lo obtenido a mymovie
    mymovie.push({
      "Title": data.Title,
      "Year": data.Year,
      "Type": data.Type,
      "Genre": data.Genre,
      "Director": data.Director,
      "Plot": data.Plot || 'No hay descripcion dispoible'
    });
  

  // Imprimmir el resultado obtenido
  console.log(mymovie);
}

//se llma la funcion con los parametros
obtainmovie('', '2004', '', '');
