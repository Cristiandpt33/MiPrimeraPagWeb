
var nombre = "Cristian parga"
var edad = 33
var estatura = 1.60

//document.write("Holaa")

var datos = document.getElementById("datos")

datos.innerHTML=`
          <h2> Hola Soy Datos</h2>
          <h3> Mi Nombre: ${nombre} </h3>
          <h3> edad: ${edad}</h3>}
          <h3> edad: ${estatura}</h3>
          
        `
        ;

// SENTENCIAS CONDICIONALES

/*
if(estatura>=150)

{
datos.innerHTML += `<h1> Eres una persona ALTA</h1>` ;
}

else
{
datos.innerHTML += `<h1> Eres una persona CHAPARRA</h1>`;
}
*/

for(var i = 2000; i<= 2023;i++)

{ datos.innerHTML += "<h2> Estamos en el Año </h2>" + i;}