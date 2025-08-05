// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let listaDeAmigoSecreto = [];
let mostrarListaDeAamigos ;
let indiceAmigoSecreto ;
let amigoSecreto ;
let resultado = document.querySelector('#resultado');


function agregarAmigo() {
// Si ingreso un número, me lanza una alerta; si no, agrega el amigo a la lista y limpia el campo de texto

    amigoSecreto = document.querySelector('#amigo').value;
  
    if (amigoSecreto == "") {
        alert("Por favor, inserte un nombre.");
    }else if (!isNaN(amigoSecreto)) {
        alert("Ingrese letras .No numeros");
    } else {
        listaDeAmigoSecreto.push(amigoSecreto);
        actualizarListaDeAmigos();
    };
    
    document.querySelector('#amigo').value = '';
};









function limpiar() {
    listaDeAmigoSecreto = [];
    resultado.innerHTML = '';
    indiceAmigoSecreto = null;
    amigoSecreto ="";
    mostrarListaDeAamigos.innerHTML = '';
};






