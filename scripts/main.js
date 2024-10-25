/**
 * Nombre Alumnos
 * NAIRUT CONTRERAS
 * AFONSO GESUALDI
 */

'use strict'

let discos = []

let codigoUsado = [123, 111]

function cargarDiscos() {
    //TODO

    do{

        //Valida la información y solicite que de las entradas al usuario
        const nombreDisco = validarString("Ingrese el nombre del Disco")
        const nombreArtista = validarString("Ingrese el nombre del Artista")

        //validamos el Id y damos parametro para ver si ya fue usado antes
        const idDisco = validarID("Ingrese el Id del disco:", codigoUsado);

        // Solicitar la portada del disco (URL de imagen)
        const linkPortada = prompt("Ingrese el link de la portada del disco:");

        //Añadimos al Id a los ya usados para que se valide si existe o no
        codigoUsado.push(parseInt(idDisco));

        // Creamos una nueva instancia del disco con los datos validados
        const nuevoDisco = new Disco(nombreDisco, nombreArtista, idDisco, linkPortada);

        //Seguimos con la carga de información para que sea fornecido las pistas adentro del bucle
        let seguir; //Declaro seguir para que pueda ser seguido la carga de datos

        do{
            const nombrePista = validarString("Ingrese el nombre de la canción:")

            const duracion = validarDuracion("Ingrese el tiempo de la duración:")

            const nuevaPista = new Pista (nombrePista, duracion);

            nuevoDisco.adicionarPista(nuevaPista)

            seguir = confirm("Deseas seguir agregando mas canciones?")

        }while (seguir)

        discos.push(nuevoDisco);

        alert(`El disco ${nombreDisco} de ${nombreArtista} con el Id: ${idDisco}, ha sido cargado con éxito!`)
    }while (confirm("Deseas cargar mas discografia?"))
}
function mostrarDisco(){

    const contenedor = document.getElementById('container')
    const biblioteca = new Biblioteca();
    let totalDisco = discos.length;

    for(let disco of discos){
        biblioteca.discos.push(disco)
    }

    setTimeout(() => {
        contenedor.innerHTML = biblioteca.toHTML();
    }, 500)
}
