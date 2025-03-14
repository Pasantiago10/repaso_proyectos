// definimos meses
let mothname = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
//definimos los meses en numero
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
//definimos ordermoth como vacio
let ordermoth =[];
//ciclo
for  (let i = 0; i < mothname.length; i++)  {
//se guarda en ordermoteh 
    ordermoth[i] = numbers[i]+ " "+ mothname[i];
}
 
//imprimimos resultado
console.log(ordermoth);

