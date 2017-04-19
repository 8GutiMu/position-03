var espacioParaCancha= document.getElementById("aquiVaLaCancha");
var canchaDeFutbol= document.createElement("section");
var spanCopyRigth = document.createElement("span");
var divFondo = crearUnDiv();
var divPorteria = crearUnDiv();
var divPorteria2 = crearUnDiv();
var divCentro = crearUnDiv();
var bolita1 = crearUnDiv();

spanCopyRigth.innerText="©Kaizen"
spanCopyRigth.className="spanDerechitos"
divFondo.className ="fondoCancha";
divPorteria.className ="porteria izquierda";
divPorteria2.className ="porteria derecha";
divCentro.className = "centro";
canchaDeFutbol.id= "canchaDeFutbol";
bolita1.className="bolitas";


canchaDeFutbol.appendChild(bolita1);
divFondo.appendChild(divCentro);
divFondo.appendChild(divPorteria2);
divFondo.appendChild(divPorteria);
canchaDeFutbol.appendChild(divFondo);
canchaDeFutbol.appendChild(spanCopyRigth);
espacioParaCancha.appendChild(canchaDeFutbol);



function crearUnDiv() {
  var algo = document.createElement("div");
  return algo;
}
