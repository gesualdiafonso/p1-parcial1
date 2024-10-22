/**
 * Nombre Alumnos
 * NAIRUT CONTRERAS
 * AFONSO GESUALDI
 */

'use strict'
/**
 * Validamos las strings de disco
 * Solicitamos al usuario que ingrese solamente textos
 * @param {String} msg
 * @returns un string valido
 */
function validarString(msg = " "){

    let datoValido;
    let entrada;

    do{
        entrada = prompt(msg);

        if(!isNaN(entrada)){
            alert("Por favor, ingrese Textos")
            datoValido = false;
        }
        else if(entrada === null || entrada.trim() === ""){
            alert("Por favor, complete el campo")
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    }
    while(!datoValido)

    return entrada;
};



/**
 * Pide y valida un código ID de la discográfica
 * @param {String} msg mensaje que será mostrado para el usuario con el prompt
 * @param {Array} idsExistentes un array de Ids ya utilizados para garantir que el usuario no ingrese nuevamente el mismo
 * @returns {Numbers} un Id valido inserido desde el usuario
 */
function validarID(msg = "", idsExistentes = []) {
    let datoValido;
    let entrada;

    do {
        entrada = prompt(msg);
        const id = parseInt(entrada)

        // Vamos decir si el codigo sera numerico o alfanumerico.

        if (isNaN(id) || id < 1 || id > 999){
            alert("Por favor, insira un Id que sea dentro del rango de 1 a 999 y que sea valido")
            datoValido = false;
        }
        else if (idsExistentes.includes(id)){
            alert("Este Id presentado ya existe, por favor volver a inserir otro")
            datoValido = false;
        }
        else{
            datoValido = true;
        }
    } 
    while(!datoValido);

    return entrada;
}

/**
 * Valida la duración ingresada por el usuario en segundos o formato MM:SS
 * @param {string} msg mensaje para el prompt
 * @returns un string en formato MM:SS
 */
function validarDuracion(msg = "Ingrese la duración en MM:SS o en segundos") {
    let datoValido;
    let entrada;
    do {
        entrada = prompt(msg);
        
        // Si el usuario ingresa un número, se convierte a formato MM:SS
        if (!isNaN(entrada) && entrada.trim() !== "") {
            const segundos = parseInt(entrada);
            if (segundos >= 0 && segundos <= 7200) { // Verifica que los segundos estén en el rango
                entrada = convertSecondsToMMSS(segundos); // Convierte a MM:SS
                datoValido = true;
            } else {
                alert("La duración debe estar entre 0 y 7200 segundos (120 minutos)");
                datoValido = false;
            }
        } 
        // Si el usuario ingresa en formato MM:SS, validamos y convertimos a segundos
        else if (entrada.includes(":")) {
            const totalSegundos = convertToSeconds(entrada);
            if (isNaN(totalSegundos) || totalSegundos < 0 || totalSegundos > 7200) {
                alert("La duración debe estar entre 0 y 7200 segundos (120 minutos)");
                datoValido = false;
            } else {
                datoValido = true;
            }
        } 
        // Si no es ni número ni formato MM:SS, es inválido
        else {
            alert("Por favor, ingrese la duración en formato MM:SS o en segundos");
            datoValido = false;
        }
    } while (!datoValido);
    return entrada;
}

/**
 * Convierte una duración en formato MM:SS a segundos
 * @param {string} duracion
 * @returns {number} duración en segundos
 */
function convertToSeconds(duracion) {
    const partes = duracion.split(":");
    const minutos = parseInt(partes[0], 10);
    const segundos = parseInt(partes[1], 10);
    return minutos * 60 + segundos;
}

/**
 * Convierte una duración en segundos a formato MM:SS
 * @param {number} segundos
 * @returns {string} duración en formato MM:SS
 */
function convertSecondsToMMSS(segundos) {
    const minutos = Math.floor(segundos / 60);
    const remanenteSegundos = segundos % 60;
    return `${minutos}:${remanenteSegundos < 10 ? "0" : ""}${remanenteSegundos}`;
}

/**
 * Converte uma duração em segundos para o formato HH:MM
 * @param {number} segundos
 * @returns {string} duração no formato HH:MM
 */
function convertSecondsToHHMM(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    return `${horas}:${minutos < 10 ? "0" : ""}${minutos}`;
}