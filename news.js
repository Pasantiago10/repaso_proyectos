const urld ={
    //key de acceso
     apiKey: 'daa83916d4d0459ab3d97e0af2bc4302',
    //url base
      urle : 'https://newsapi.org/v2/top-headlines?'
    }
     //funcion para obtener noticias
    async function neNews(q,from,sortby,country, category) {
    let newmew = [];
    
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

    //se trae a url con los parametros requeridos y los opcionales
        const response = await fetch(urln);
    //se pasa el respuesta a json
        const data = await response.json();
    
    }

    neNews('bitcoin','2023-10-01','popularity','us','business')