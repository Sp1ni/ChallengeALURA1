// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Crear el arreglo para la lista de amigos

function agregarAmigo() { // Función para añadir a los amigos a la lista
    // Declaración de constantes
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Esto elimina los espacio en blanco antes y después del string, si es que se añadió alguno
    let lista = document.getElementById("listaAmigos");
    let botonSortear = document.querySelector(".button-draw");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre antes de añadir.");
        return;
    }
    
    amigos.push(nombre);
    
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li); // Añade el elemento "li" como hijo al elemento padre "lista"
    
    input.value = "";
    botonSortear.disabled = false; // Habilitar el botón de sorteo
}

function sortearAmigo() { //Función para sortear al amigo de la lista existente
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    // Declaración de constantes
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista
    amigos = [];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
    
    document.querySelector(".button-draw").disabled = true; // Deshabilitar el botón después del sorteo
}