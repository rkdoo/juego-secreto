function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    //forma larga
    //let valorCaja = document.querySelector("#valorUsuario");
    //valorCaja.value = "";
    document.querySelector("#valorUsuario").value = ""; //forma abreviada
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {


    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return Math.floor(Math.random() * 10) + 1;

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }



}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();

    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//let numeroSecreto = generarNumeroSecreto();
let numeroSecreto;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 50;



//asignarTextoElemento('h1', 'Juego del número secreto');
//asignarTextoElemento('p', 'Indica un número del 1 al 10');

condicionesIniciales();
