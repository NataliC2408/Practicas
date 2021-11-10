function datos  ()  {
var nombres= document.getElementById("nombres").value;
var apellidos= document.getElementById("apellidos").value;
var email= document.getElementById("email").value;
var correo= fechaNacimiento.getElementById("fecha-nacimiento").value;
var f= document.getElementById("f").checked;
var m= document.getElementById("m").checked;
var estatura= document.getElementById("estatura").value;
var peso= document.getElementById("peso").value;
var deporte= document.getElementById("deporte").checked;
}

function datos(){
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechaNacimineto = document.getElementById("Fecha-nacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var deporte = document.getElementById("deporte").checked;

    var mensaje = "Nombres:" + nombres
    +"\nApellidos:" + apellidos
    +"\nEmail:" + email
    +"\nFecha de nacimiento:" + fechaNacimineto
    +"\nEs mujer:" + f
    +"\nEs hombre:" + m
    +"\nEstatura:" + estatura + "c"
    +"\nPeso:" + peso + "kg"
    +"\nHacer deporte:" + deporte;

    console.log(mensaje)
}
````"¨¨ [[]]

function funciona(){
    console.log("esto funciona");
}
