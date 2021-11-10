var puntaje = 18
console.log(puntaje);
var pregunta = true;
if(pregunta===true){
    puntaje = puntaje+2;
    

}console.log(puntaje);


if(puntaje<=10){
    console.log("Perdiste");
 }else if(10<puntaje<=14){
     console.log("Casi lo logras");
 }else if(puntaje===20){
     console.log("Lo lograste");
 }