import { CartaTecnico } from "./CartaTecnico.js";

class GeneradorCartasTecnicos{
    cartasTecnicosGeneradas= [];

    generarCartasConTecnicosGenerados(listadoTecnicos){
        let i = 0;
        for( i = 0 ; i < listadoTecnicos.length; i++ ){
            this.cartasTecnicosGeneradas[i]= new CartaTecnico(listadoTecnicos[i].getLegajoTecnico(),
                listadoTecnicos[i].getNombre(),
                listadoTecnicos[i].getSkill(),
                listadoTecnicos[i].getHorario(),
                listadoTecnicos[i].getDisponible()
            )
        }
    }

    imprimirCartasTecnicos(){
        let i = 0;
        document.querySelector("#contenido").innerHTML = "";
        for(i=0; i < this.cartasTecnicosGeneradas.length;i++){
            document.querySelector("#contenido").innerHTML += `
            <div class="row row-cols-3" id="${this.cartasTecnicosGeneradas[i].legajoTecnico}"> 
                <div class="card text-bg-dark mb-3">
                    <div class="card-body">
                        <h7 class="card-title">${this.cartasTecnicosGeneradas[i].nombre}</h7>
                        <h7 class="card-title">${this.cartasTecnicosGeneradas[i].legajoTecnico}</h7>
                        <h6 class="card-title">${this.cartasTecnicosGeneradas[i].horario}</h6>
                        <p class="card-text">${this.cartasTecnicosGeneradas[i].skill}  ${this.cartasTecnicosGeneradas[i].disponible}</p>
                    </div>
                </div>
            </div>
                `
        }
    }
}

export {GeneradorCartasTecnicos};