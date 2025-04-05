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
    const note = [];
    //asegurarse que el tema se aobligotario junto con la apikey
    //se accede al valor inmutable de la url cullo contenedor contiene la llave y  y la url de acceso
    let urln = `${urld.urle}q=${q}`;

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

// se crea variable autor
const authors = []
// se recorre  el objeto articles y se inserta autor en el objeto cauthorcreator
for(let i=0; i<data.articles.length; i++){    
    authors.push(data.articles[i].author);

}
//se inserta authorc en note
note.push({"author": authors})
//arreglo noticias  grnde con noticia


// se crea variable autor
const titles = []
// se recorre  el objeto articles y se inseta autor nn el objeto cauthorcreator
for(let i=0; i<data.articles.length; i++){    
    titles.push(data.articles[i].title);

}
//se inserta title en note
note.push({"title": titles})




// se crea variable autor
const url = []
// se recorre el objeto articles y se inseta autor en el objeto cauthorcreator
for(let i=0; i<data.articles.length; i++){    
    url.push(data.articles[i].urlToImage);

}
//se inserta title en note
note.push({"urlimage": url})

//se recorre note y se inserta en newnew
for(let j=0; j< note.length; j++){    
    newnew.push({"news": note});

}
//imprimomos resultado
console.log(JSON.stringify(newnew))
}

neNews('tesla','2023-21-12','popularity','us','business')