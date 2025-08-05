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







function actualizarListaDeAmigos() {
        //almacenamos el <lu> con el id listaAmigos de en una variable
        mostrarListaDeAamigos  = document.querySelector('#listaAmigos');
        mostrarListaDeAamigos.innerHTML = '';

        for (let amigo of listaDeAmigoSecreto) {
            // Crear <li> y poner el nombre
            let li = document.createElement('li');
            li.textContent = amigo;
            mostrarListaDeAamigos.appendChild(li);
        };
        
};







function sortearAmigo() {
    // si la lista esta llena genero el amigo secreto y lo muestro y sino envio un mensaje indicandolo

    if (listaDeAmigoSecreto.length >= 1) {
        // Genero un número aleatorio según la cantidad de elementos de la lista
        indiceAmigoSecreto = Math.floor(Math.random() * listaDeAmigoSecreto.length);
        amigoSecreto = listaDeAmigoSecreto[indiceAmigoSecreto];
        resultado.innerHTML = 'tu amigo secreto es : ' + amigoSecreto;
        mostrarListaDeAamigos.innerHTML = '';
    }else{
        resultado.innerHTML = 'No as agregado ningun amigo secreto aun ';   
    };
    
};

function limpiar() {
    listaDeAmigoSecreto = [];
    resultado.innerHTML = '';
    indiceAmigoSecreto = null;
    amigoSecreto ="";
    mostrarListaDeAamigos.innerHTML = '';
};






