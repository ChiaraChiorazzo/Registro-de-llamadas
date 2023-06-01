// Variables globales
var medicosTableBody = document.getElementById("medicos-table-body");
var agregarMedicoBtn = document.getElementById("agregar-medico-btn");

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

// Evento click para el botón "Agregar Médico"
agregarMedicoBtn.addEventListener("click", function() {
  agregarFila();
});

// Agregar una fila inicial al cargar la página
agregarFila();
