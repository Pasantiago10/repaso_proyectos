//url base
let url = 'https://api.disneyapi.dev/';

async function obtianmovieimport(id) {
    const charactersinfo = [];
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

//se crea variable flist para convertir films que esta dentro de data a arreglo para que pueda ser leido con un for
const flist =  data.data.films;

//se recorre flist y se inserta films
for(let i=o; i<flist.length; i++) {
    films.push({"!films":flist[i]})
}
//se crea la variable character 
const c = [];

//se inserta status en el arrrelo c
c.push({"name": data.data.name});
c.push({"magen": data.data.imageUrl});
c.push({"recent update": data.data.updatedAt})


//se inseta c en charactersinfo
charactersinfo.push({"characters information": c});


// //solo si es u  arreglo interno se recorre

//insertamos charactersinfor en films
films.push({"characterinformation": charactersinfo});
console.log(JSON.stringify(films));


}

//se llama la funcion
obtianmovieimport(24)