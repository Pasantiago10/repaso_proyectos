const urld ={
    //key de acceso
     apiKey: 'daa83916d4d0459ab3d97e0af2bc4302',
    //url base
      urle : 'https://newsapi.org/v2/top-headlines?'
    }
     //funcion para obtener noticias
    async function neNews(q,from,sortby,country, category) {
    let newnew = []
    const notice = [];
    
    //asegurarse que el tema se aobligotario junto con la apikey
    //se accede al valor inmutale de la url cullo contenedor contiene la llave y  y la url de acceso
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
// console.log(newnew)
//se crea la variable articles;
//se recorre he inserta el valor de articles en su variable

// se crea variable autor
const authors = []
// se recorre  el objeto articles y se inseta autor nn el objeto cauthorcreator
for(let i=0; i<data.articles.length; i++){    
    authors.push(data.articles[i].author);
   // console.log(authors);

}
//se inserta authorc en notice
notice.push({"author": authors})


// se crea variable autor
const titles = []
// se recorre  el objeto articles y se inseta autor nn el objeto cauthorcreator
for(let i=0; i<data.articles.length; i++){    
    titles.push(data.articles[i].title);
   // console.log(titles);

}
//se inserta title en notice
notice.push({"title": titles})

//se inserta authorc en notice
notice.push({"author": authors})


// se crea variable autor
const url = []
// se recorre  el objeto articles y se inseta autor nn el objeto cauthorcreator
for(let i=0; i<data.articles.length; i++){    
    url.push(data.articles[i].urlToImage);
    //console.log(url);

}
//se inserta title en notice
notice.push({"urlimage": url})


for(let j=0; j<data.articles.length; j++){
   notice.push(data.articles[j]);
 
}
//se inserta news a newnew
newnew.push({"news": notice})

console.log(newnew);

}

neNews('bitcoin','2024-21-12','popularity','us','business')