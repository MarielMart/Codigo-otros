var formulario = document.querySelector("form") 

formulario.onsubmit = function(event) { // se cambió la e por event

  event.preventDefault(); // se corrigió la función
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  
  }
}

/*var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar); */  // se comentó esta parte ya que se diplica

function crearElemento(descripcion, valor, elementoLista) { // quité esta función de la función agregarInvitado
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  }

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") // se corrige "added" por "add"
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

// crearElemento("Nombre", nombre, elementoLista) // se comentó para que no se repitiera el nombre en la impresión de lista de invitados
crearElemento("Edad", edad, elementoLista) // se agregó la variable elementoLista para que se imprimieran los datos
crearElemento("Nacionalidad", nacionalidad, elementoLista) //// se agregó la variable elementoLista para que se imprimieran los datos


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}

// La idea de ejecutar este código, mediante un evento, es validar que los datos que se ingresan en el formulario cumplan con los parámetros establecidos,
// una vez cumpliendo éstos, se llama a la función agregarInvitados mediante los valores de los inputs; así se crea un div que llama en el html mediante el id "lista-de-invitados".
// En este div se imprimen los datos de cada input mediante la función crearElemento;
// adicional, se agrega un botón que elimina el div creado de cada invitado.