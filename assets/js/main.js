var espacioParaCancha= document.getElementById("aquiVaLaCancha");
var canchaDeFutbol= document.createElement("section");
var divFondo = crearUnDiv();
var divPorteria = crearUnDiv();
var divPorteria2 = crearUnDiv();
var divCentro = crearUnDiv();

divFondo.class ="fondoCancha";
divPorteria.class ="porteria";
divPorteria.class ="izquierda";
divPorteria2.class ="porteria";
divPorteria2.class ="derecha";
divCentro.class = "centro";
canchaDeFutbol.id= "canchaDeFutbol";


divFondo.appendChild(divCentro);
divFondo.appendChild(divPorteria2);
divFondo.appendChild(divPorteria);
canchaDeFutbol.appendChild(divFondo);
espacioParaCancha.appendChild(canchaDeFutbol);


function crearUnDiv() {
  var algo = document.createElement("div");
  return algo;
}
