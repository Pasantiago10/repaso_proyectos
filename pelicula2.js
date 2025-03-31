//la url
const url = "https://omdbapi.com/?i=tt3896198&apikey=efac4154"
//no revisar codigo completo si no 
//creacion de la funcion
async function obtainmovies(t,y,plot,type) {
 //se crea el array donde se guardaran las peliculas sin importar el resultado
 let  mymovie = [];
 //se trae la url de las peliculas filtrados por por la el titulo,año,trama, tipo
 //se asegura de que el titulo sea obligatorio
 
//segundo se agrega url con el parametro obligatorio titulo
 let urlb  = `${url}&t=${(t)})`;
 //se deja como no requerido los otros paametros para agregaros en caso se inserten
 if(y) 
    {urlb += `&y=${y}`
 
};
 if(plot) { 
  urlb += `&plot=${plot}`

}

 if(type) { urlb += `&type=${type}`;
console.log(urlb)
 }
 //se trae la url con los parametros no reqeridos y los cionales segun sea el caso
 const response = await fetch(urlb);


//se pasa resulado a json
const data = await response.json();
//se crea el array 
 //se recorre he inserta el valor de abilities en su variable

//se inserta el valor de titulo en mymovie
mymovie.push({"Title":data.Title});
//se crea variable año


//se inserta year en mymovie
mymovie.push({"Year": data.Year});
//Se iserta el genero
mymovie.push({"Genre":data.Genre});

mymovie.push({"Director":data.Director});
//se imprime el resultado

console.log(mymovie)
}


//console.log(obtainmovies)
obtainmovies('avatar');
