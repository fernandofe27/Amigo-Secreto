// Guardamos los amigos en un arreglo vacío
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtenemos el valor del input
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validamos que no esté vacío
  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  // Agregamos el nombre al arreglo
  amigos.push(nombre);

  // Limpiamos la caja de texto
  input.value = "";

  // Actualizamos la lista en la pantalla
  mostrarLista();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  // Recorremos el arreglo y creamos un <li> por cada nombre
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista.");
    return;
  }

  // Elegimos un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indice];

  // Mostramos el resultado en la lista de resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiamos cualquier resultado anterior

  let li = document.createElement("li");
  li.textContent = "El amigo secreto es: " + amigoSecreto;
  resultado.appendChild(li);
}
