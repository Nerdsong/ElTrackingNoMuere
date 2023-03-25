import { Servicio } from "./Servicio.js";

class GeneradorCartasServicios{

    verificarLegajo(array, legajo){
        return array.includes(legajo);
    }
    
    imprimirCartasServiciosGeneradas(listadoTecnicos,listado){
        let s=0;
        for( s = 1 ; s < listado.length; s++ ){
            if(this.verificarLegajo(listadoTecnicos,listado[s].getLegajoServicio())){
                document.querySelector(`#${listado[s].getLegajoServicio()}`).innerHTML +=`
                        <div class="card text-bg-info mb-3">
                            <div class="card-body text-start">
                                <h7 class="card-title">SR ${listado[s].getSR()}</h7><br>
                                <h7 class="card-title">TASK ${listado[s].getTask()}</h7>
                                <h6 class="card-title">${listado[s].getNombreDelSitio()}</h6>
                                <p class="card-text">${listado[s].getDireccion()} <br> ${listado[s].getTipoDeServicio()} <br> ${listado[s].getSeveridad()} <br> Rb:${listado[s].getRequestedBy()} <br> St: ${listado[s].getScheduleStart()}</p>
                            </div>
                        </div>
                    `
                ;
            }
            else{}
        }     
    }
}
;
export {GeneradorCartasServicios};