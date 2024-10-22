'use strict'

class Biblioteca {
    constructor(){
        this.discos = [];

        fetch("discos.json")
        .then(response => response.json())
        .then(discos => {
            for (let disco of discos) {
                const nuevoDisco = new Disco(disco.nombre, disco.artista, disco.id, disco.portada);
                
                for (let pista of disco.pistas) {
                    const duracionConvertida = convertSecondsToMMSS(pista.duracion);
                    const nuevaPista = new Pista(pista.nombre, duracionConvertida);
                    nuevoDisco.adicionarPista(nuevaPista);
                }
                this.discos.push(nuevoDisco);
            }
            mostrarDisco(); // Atualiza para exibir los discos
        });
    }

    getDiscoMaisLargo() {
        if (this.discos.length === 0) return null; // Retorna null si no hay discos
    
        let discoMaisLargo = this.discos[0];
        for (let disco of this.discos) {
            if (convertToSeconds(disco.getDuracionTotal()) > convertToSeconds(discoMaisLargo.getDuracionTotal())) { 
                discoMaisLargo = disco;
            }
        }
        return discoMaisLargo;
    }

    toHTML() {
        let html = '';
        const discoMaisLargo = this.getDiscoMaisLargo();
        
        if (discoMaisLargo) {
            // Adiciona o parágrafo na div de información fora do container
            html += `<div class="informacion"><p>Disco con mayor duración: ${discoMaisLargo.nombre} (${discoMaisLargo.getDuracionTotal()})</p></div>`;
        } else {
            html += `<div class="informacion"><p>Ningún disco ha sido encontrado.</p></div>`;
        }
    
        // Adiciona o conteúdo dos discos dentro do container
        html += `<div id="container">`;
        for (let disco of this.discos) {
            html += disco.toHTML(); // Chamando o HTML de cada disco
        }
        html += `</div>`; // Fecha o container
        
        return html;
    }
}

/**
 * Nombre Alumnos
 * NAIRUT CONTRERAS
 * AFONSO GESUALDI
 */