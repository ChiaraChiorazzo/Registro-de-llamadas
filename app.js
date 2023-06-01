// Variables globales
var medicosTableBody = document.getElementById("medicos-table-body");
var agregarMedicoBtn = document.getElementById("agregar-medico-btn");
var eliminarDatosBtn = document.getElementById("eliminar-datos-btn");

// Obtener el input del HCO y el contenido guardado en el Local Storage
var hcoInput = document.getElementById("hco-input");
var hco = localStorage.getItem("hco");

// Cargar el HCO guardado al cargar la página
if (hco) {
  hcoInput.value = hco;
}

// Función para agregar una nueva fila a la tabla
function agregarFila() {
  var nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.placeholder = "Nombre";
  nombreInput.classList.add("nombre-input");

  var nombreCell = document.createElement("td");
  nombreCell.appendChild(nombreInput);

  var encontradoCheckbox = document.createElement("input");
  encontradoCheckbox.type = "checkbox";
  encontradoCheckbox.addEventListener("change", actualizarFechaHora);

  var encontradoCell = document.createElement("td");
  encontradoCell.appendChild(encontradoCheckbox);

  var confirmacionCheckbox = document.createElement("input");
  confirmacionCheckbox.type = "checkbox";
  confirmacionCheckbox.addEventListener("change", actualizarFechaHora);

  var confirmacionCell = document.createElement("td");
  confirmacionCell.appendChild(confirmacionCheckbox);

  var linkInput = document.createElement("input");
  linkInput.type = "text";
  linkInput.placeholder = "Link";

  var linkCell = document.createElement("td");
  linkCell.appendChild(linkInput);

  var fechaCell = document.createElement("td");

  var comentarioInput = document.createElement("input");
  comentarioInput.type = "text";
  comentarioInput.placeholder = "Comentario";

  var comentarioCell = document.createElement("td");
  comentarioCell.appendChild(comentarioInput);

  var row = document.createElement("tr");
  row.appendChild(nombreCell);
  row.appendChild(encontradoCell);
  row.appendChild(confirmacionCell);
  row.appendChild(linkCell);
  row.appendChild(fechaCell);
  row.appendChild(comentarioCell);

  medicosTableBody.appendChild(row);

  // Guardar el contenido de los campos de texto
  nombreInput.addEventListener("input", guardarContenido);
  linkInput.addEventListener("input", guardarContenido);
  comentarioInput.addEventListener("input", guardarContenido);
}

// Función para actualizar la fecha y hora
function actualizarFechaHora() {
  var fechaHora = new Date();
  var fila = this.parentNode.parentNode;
  var fechaCell = fila.querySelector("td:nth-child(5)");

  if (this.checked) {
    fechaCell.textContent = fechaHora.toLocaleString();
  } else {
    fechaCell.textContent = "";
  }
}

// Función para guardar el contenido de los campos de texto
function guardarContenido() {
  var fila = this.parentNode.parentNode;
  var contenido = {
    nombre: fila.querySelector(".nombre-input").value,
    link: fila.querySelector("input[type='text']:nth-child(4)").value,
    comentario: fila.querySelector("input[type='text']:nth-child(6)").value
  };

  localStorage.setItem("contenido", JSON.stringify(contenido));
}

// Función para cargar el contenido guardado al cargar la página
function cargarContenidoGuardado() {
  var contenido = JSON.parse(localStorage.getItem("contenido"));

  if (contenido) {
    var fila = medicosTableBody.firstElementChild;
    fila.querySelector(".nombre-input").value = contenido.nombre;
    fila.querySelector("input[type='text']:nth-child(4)").value = contenido.link;
    fila.querySelector("input[type='text']:nth-child(6)").value = contenido.comentario;
  }
}

// Evento click para el botón "Agregar Médico"
agregarMedicoBtn.addEventListener("click", function() {
  agregarFila();
});

// Evento click para el botón "Eliminar Datos"
eliminarDatosBtn.addEventListener("click", function() {
  localStorage.removeItem("contenido");
  location.reload();
});

// Guardar el HCO al cambiar su valor
hcoInput.addEventListener("input", function() {
  localStorage.setItem("hco", this.value);
});

// Agregar una fila inicial al cargar la página
agregarFila();
cargarContenidoGuardado();
