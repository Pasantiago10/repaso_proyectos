//url 
const url = "https://omdbapi.com/?i=tt3896198&apikey=efac4154";

async function obtainmovie(t, y, plot, type) {
  // arreglo vacio
  let mymovie = [];

  //url base
  let urlb = url;

  //se define el primer parámetro que es título
  if (t) {
    urlb += `&t=${encodeURIComponent(t)}`;
  }

//
  if (y) {
    urlb += `&y=${encodeURIComponent(y)}`;
  }

  //se agrega plot si está definido
  if (plot) {
    urlb += `&plot=${encodeURIComponent(plot)}`;
  }

  //se agrega type si está definido
  if (type) {
    urlb += `&type=${encodeURIComponent(type)}`;
  }

  //solicitud a la api con la url filtrafa
  const response = await fetch(urlb);
  //se pasa la respuesta a json
  const data = await response.json();
 
  
    // Se agrega la película al arreglo "mymovie"
    mymovie.push({
      "Title": data.Title,
      "Year": data.Year,
      "Type": data.Type,
      "Genre": data.Genre,
      "Director": data.Director,
      "Plot": data.Plot || 'No hay descripcion dispoible'
    });
  

  // Imprime el arreglo con la película obtenida
  console.log(mymovie);
}

// Llamada a la función con un título
obtainmovie('', '2004', '', '');
