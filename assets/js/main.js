function crearUnElemento(elementoACrear,propiedades) {
  var algo = document.createElement(elementoACrear);
  algo.className= propiedades.className;
  algo.innerText = propiedades.innerText;

  return algo;
}

var canchaDeFutbol = crearUnElemento("section",
  {className:"canchaDeFutbol",innerText:""})

var spanCopyRigth = crearUnElemento("span",
  {className:"spanDerechitos",innerText:"©Kaizen"})

var divFondo = crearUnElemento("div",
  {className:"fondoCancha",innerText:""})

var divPorteria = crearUnElemento("div",
  {className:"porteria izquierda",innerText:""})

var divPorteria2 = crearUnElemento("div",
  {className:"porteria derecha",innerText:""})

var divCentro= crearUnElemento("div",
  {className:"centro",innerText:""})

var bolita1 = crearUnElemento("div",
  {className:"bolitas",innerText:""})

var espacioParaCancha= document.getElementById("aquiVaLaCancha");



canchaDeFutbol.appendChild(bolita1);
divFondo.appendChild(divCentro);
divFondo.appendChild(divPorteria2);
divFondo.appendChild(divPorteria);
canchaDeFutbol.appendChild(divFondo);
canchaDeFutbol.appendChild(spanCopyRigth);
espacioParaCancha.appendChild(canchaDeFutbol);
