
import { GeneradorDeServicios } from "./GeneradorDeServicios.js";
import { GeneradorDeTecnicos } from "./GeneradorTecnicos.js";
import { GeneradorCartasTecnicos } from "./GeneradorCartaTecnico.js";
import { GeneradorCartasServicios } from "./GeneradorCartaServicio.js";
import { Servicio } from "./Servicio.js";
import { DatosLectura } from "./appLecturaArchivo.js";

let boton_lectura = document.getElementById("boton_leer");
class Botones{

    leer (element){
        element.addEventListener('click', () => aplicacionEjecutable());
    }
}

const BOTON = new Botones()
BOTON.leer(boton_lectura);


function aplicacionEjecutable(){
    let datosLectura = new DatosLectura();
    let generadorTecnicos = new GeneradorDeTecnicos();
    let generadorServicios = new GeneradorDeServicios();
    let generadorCartasT = new GeneradorCartasTecnicos();
    let generadorCartasS = new GeneradorCartasServicios()

    datosLectura.setDatosCSV(document.querySelector("#datos_de_los_servicios").value);
    datosLectura.setDatosTecnicosCSV(document.querySelector("#datos_de_los_tecnicos").value);
    datosLectura.convertirDatos()
    generadorTecnicos.leerYGeneradTecnicos(datosLectura.datosTecnicos);
    generadorServicios.leerYGenerarServicios(datosLectura.datos);
    generadorCartasT.generarCartasConTecnicosGenerados(generadorTecnicos.tecnicosGenerados);

    let i = 0;
    let p = 0;

    for(p=0; p < generadorTecnicos.tecnicosGenerados.length; p++){
        for(i=0; i < generadorServicios.serviciosGenerados.length; i++){
            if(generadorTecnicos.tecnicosGenerados[p].getLegajoTecnico() == generadorServicios.serviciosGenerados[i].getLegajoServicio()){
                generadorTecnicos.tecnicosGenerados[p].setServicios(generadorServicios.serviciosGenerados[i]);
            }
            else{};
        };
    };

    generadorCartasT.imprimirCartasTecnicos();
    generadorCartasS.imprimirCartasServiciosGeneradas(generadorTecnicos.getLegajos(),generadorServicios.serviciosGenerados);

    function imprimirServiciostécnico(tecnico){
        console.log(tecnico.servicios);
    } 

    for(p=0; p < generadorTecnicos.tecnicosGenerados.length; p++){
        imprimirServiciostécnico(generadorTecnicos.tecnicosGenerados[p]);
    }

}

export {aplicacionEjecutable}
