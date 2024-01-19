let numeroSecreto = 0;
let intentos = 0;
let listaNumerosRamdon = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`,`correcto lo hiciste en ${intentos} ${intentos === 1 ? `vez` : `veces`}`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`,`el numero secreto es menor`);
        } else {
            asignarTextoElemento(`p`,`el numero secreto es mayor`);
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja() {
    document.querySelector(`#valorUsuario`).value = ``;
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosRamdon);
    // al jugar todos los numeros se cerrara el programa
    if (listaNumerosRamdon.length == numeroMaximo) {
        asignarTextoElemento(`p`,`ya no quedan mas numeros perroooo`);
    } else {
    // si el numero generado esta incluido en la lista no jugarlo
    if (listaNumerosRamdon.includes(numeroGenerado)) {

        return generarNumeroSecreto();
    } else {
        listaNumerosRamdon.push(numeroGenerado);
        return numeroGenerado;
    }
}

}

function condicionesIniciales() {
    asignarTextoElemento(`h1`,`juego del desafio`);
    asignarTextoElemento(`p`,`indica un numero ramdon ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarcaja();
    // indicar mensaje de intervalo de numero
    //generar numero ramdon
   // numeros de intentos
   condicionesIniciales();
    //desabhilitar el boton de juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);

}


condicionesIniciales(); 