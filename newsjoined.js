const urld ={
    //key de acceso
     apiKey: 'daa83916d4d0459ab3d97e0af2bc4302',
    //url base
      urle : 'https://newsapi.org/v2/top-headlines?'
    }
     //funcion para obtener noticias
    async function neNews(q,from,sortby,country, category) {
        //se crean las variables new new y note para combinarlas al final
    let newnew = [];
    const notes = [];
    //asegurarse que el tema se aobligotario junto con la apikey
    //se accede al valor inmutale de la url cullo contenedor contiene la llave y  y la url de acceso
    let urln = `${urld.urle}q=${q}`;
//note pequeño dentro del for y mas grande tambien

    // se agregan valores no obligatorios
    if(from) 
        {urln += `&from=${from}`

    }

    if(sortby) 
        {urln += `&sortby=${sortby}`

    }

    if(country) 
        {urln += `&country=${country}`

    }

    if(category) 
        {urln += `&category=${category}`

    }
    //se arregla la llve ade acceso de la url para que quede al final sin importar los parametros metidos
    urln += `&apikey=${urld.apiKey}`;
console.log(urln)
    //se trae a url con los parametros requeridos y los opcionales
        const response = await fetch(urln);
    //se pasa el respuesta a json
        const data = await response.json();

        //insertamos status en el arrrelo newnew
        newnew.push({"status": data.status})
        //insertamos total resultados tambien
    newnew.push({"totalResults": data.totalResults})
//se crea la variable articles;
//se recorre he inserta el valor de articles en su variable

// se crea variable anote
const note = []
// se recorre  el objeto articles y se inserta los objetos en note y luego el arreglo notes
//dentro del for se crea la variable notes tabien se inserta note en notes
for(let i=0; i<data.articles.length; i++){    
    note.push(data.articles[i].author);
    note.push(data.articles[i].title);
    note.push(data.articles[i].url);
    notes.push({"news":note});
}


//se recorre notes y se inserta en newnew
    newnew.push({"news": notes});

//imprimomos resultado
console.log(JSON.stringify(newnew))
}

neNews('tesla','2023-21-12','popularity','us','business')