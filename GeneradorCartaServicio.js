import { Servicio } from "./Servicio.js";

class GeneradorCartasServicios{

    verificarLegajo(array, legajo){
        return array.includes(legajo);
    }
    
    imprimirCartasServiciosGeneradas(listadoTecnicos,listado){
        let s=0;
        for( s = 0 ; s < listado.length; s++ ){
            if(this.verificarLegajo(listadoTecnicos,listado[s].getLegajoServicio())){
                if(listado[s].getStatus()== "Assigned"){
                    document.querySelector(`#${listado[s].getLegajoServicio()}`).innerHTML +=`
                            <div class="card border-info mb-3 " id= "${listado[s].getSR()}">
                                <div class="card-body text-start">
                                    <p class="card-text especial">SR ${listado[s].getSR()}</p>
                                    <p class="card-text especial">TASK ${listado[s].getTask()}</p>                                    <p class="card-text especial">${listado[s].getServiceTag()}</p>
                                    <h6 class="card-title">${listado[s].getNombreDelSitio()}</h6>
                                    <p class="card-text">${listado[s].getDireccion()}</p> <p class="card-text especial"> ${listado[s].getTipoDeServicio()} </p> <p class="card-text especial"> ${listado[s].getSeveridad()} </p> <p class="card-text"> Rb: ${listado[s].getRequestedBy()}<br>St: ${listado[s].getScheduleStart()}</p>
                                </div>
                            </div>
                        `;
                }
                else if (listado[s].getStatus()== "Accepted"){
                    document.querySelector(`#${listado[s].getLegajoServicio()}`).innerHTML +=`
                            <div class="card text-bg-info mb-3 ">
                                <div class="card-body text-start">
                                    <p class="card-text especial">SR ${listado[s].getSR()}</p>
                                    <p class="card-text especial">TASK ${listado[s].getTask()}</p>
                                    <p class="card-text especial">${listado[s].getServiceTag()}</p>
                                    <h6 class="card-title">${listado[s].getNombreDelSitio()}</h6>
                                    <p class="card-text">${listado[s].getDireccion()}</p> <p class="card-text especial"> ${listado[s].getTipoDeServicio()} </p> <p class="card-text especial"> ${listado[s].getSeveridad()} </p> <p class="card-text"> Rb:${listado[s].getRequestedBy()}<br>St: ${listado[s].getScheduleStart()}</p>
                                </div>
                            </div>
                        `;
                }
                else if (listado[s].getStatus()== "Traveling"){
                    document.querySelector(`#${listado[s].getLegajoServicio()}`).innerHTML +=`
                            <div class="card text-bg-warning mb-3 ">
                                <div class="card-body text-start">
                                    <p class="card-text especial">SR ${listado[s].getSR()}</p>
                                    <p class="card-text especial">TASK ${listado[s].getTask()}</p>
                                    <p class="card-text especial">${listado[s].getServiceTag()}</p>
                                    <h6 class="card-title">${listado[s].getNombreDelSitio()}</h6>
                                    <p class="card-text">${listado[s].getDireccion()}</p> <p class="card-text especial"> ${listado[s].getTipoDeServicio()} </p> <p class="card-text especial"> ${listado[s].getSeveridad()} </p> <p class="card-text"> Rb:${listado[s].getRequestedBy()}<br>St: ${listado[s].getScheduleStart()}</p>
                                </div>
                            </div>
                        `;
                }
                else if (listado[s].getStatus()== "Working"){
                    document.querySelector(`#${listado[s].getLegajoServicio()}`).innerHTML +=`
                            <div class="card text-bg-success mb-3 ">
                                <div class="card-body text-start">
                                    <p class="card-text especial">SR ${listado[s].getSR()}</p>
                                    <p class="card-text especial">TASK ${listado[s].getTask()}</p>
                                    <p class="card-text especial">${listado[s].getServiceTag()}</p>
                                    <h6 class="card-title">${listado[s].getNombreDelSitio()}</h6>
                                    <p class="card-text">${listado[s].getDireccion()}</p> <p class="card-text especial"> ${listado[s].getTipoDeServicio()} </p> <p class="card-text especial"> ${listado[s].getSeveridad()} </p> <p class="card-text"> Rb:${listado[s].getRequestedBy()}<br>St: ${listado[s].getScheduleStart()}</p>
                                </div>
                            </div>
                        `;
                }
                else if (listado[s].getStatus()== "Same Site Arrival"){
                    document.querySelector(`#${listado[s].getLegajoServicio()}`).innerHTML +=`
                            <div class="card border-success mb-3 ">
                                <div class="card-body text-start">
                                    <p class="card-text especial">SR ${listado[s].getSR()}</p>
                                    <p class="card-text especial">TASK ${listado[s].getTask()}</p>
                                    <p class="card-text especial">${listado[s].getServiceTag()}</p>
                                    <h6 class="card-title">${listado[s].getNombreDelSitio()}</h6>
                                    <p class="card-text">${listado[s].getDireccion()}</p> <p class="card-text especial"> ${listado[s].getTipoDeServicio()} </p> <p class="card-text especial"> ${listado[s].getSeveridad()} </p> <p class="card-text"> Rb:${listado[s].getRequestedBy()}<br>St: ${listado[s].getScheduleStart()}</p>
                                </div>
                            </div>
                        `;
                }
            }
            else{}
        }     
    }
}
;
export {GeneradorCartasServicios};