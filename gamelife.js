//declaracion de inputs
let celllife = 14;
let deathcell = 12;

//funcion pra crear el tablero  como jugador
function nextturn(celllife, deathcell) {
    //se define los indices de las filas y columnas
    
    //se crea el arreglo tablero gamelife como vacio
 let tabletgamelife = [];

 //ciclo for para crear el tablero

 for(let cl = 0; cl < celllife; cl++){
    //vacio
    tabletgamelife[cl] = [];

///otra ciclo for
    for(let dc = 0; dc < deathcell; dc++){

       
    if (cl+ dc === (Math.floor(Math.random() * 2))) {
// condicional para crear las celulas vivas o muertas segun  las reglas del juego de la vida
        tabletgamelife[cl][dc] = 1;

    } else {
        tabletgamelife[cl][dc] = 0;

    }
}

 }
 //imprimimos el tablero dibujado con los numeros

 for(let cl = 0; cl < celllife; cl++){
    let out = "";
    for(let dc = 0; dc < deathcell; dc++){
//se efectua esto para escribir todo junto
        out += tabletgamelife[cl][dc] + " ";
    }

    //se imprime el resultado
    console.log(out);

}
}


//se llama la funcion 
nextturn(celllife,deathcell);


