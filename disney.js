//url base
let url = 'https://api.disneyapi.dev/';

async function obtianmovieimport(id) {
    const character = [];
    let films = [];
    
    let urlmi = `${url}character`;
    //paramtro no obligatorio
    if(id) 
        {urlmi += `/${id}`}
    console.log(urlmi)
    
    //
    //se trae a url con los parametros requeridos y los opcionales
       const response = await fetch(urlmi);
       //se pasa el respuesta a json
           const data = await response.json();
    
         console.log(data);
}
//se llama la funcion
obtianmovieimport(230);