import { Servicio } from "./Servicio.js";

class GeneradorDeServicios{
    serviciosGenerados = [];

    leerYGenerarServicios(matrizDatos){
        let i = 0;
        for( i = 0 ; i < matrizDatos.length; i++ ){
            this.serviciosGenerados[i] = new Servicio ();
            this.serviciosGenerados[i].setLegajoServicio(matrizDatos[i][4]);
            this.serviciosGenerados[i].setSR(matrizDatos[i][12]);
            this.serviciosGenerados[i].setTask(matrizDatos[i][0]);
            this.serviciosGenerados[i].setNombreDelSitio(matrizDatos[i][6]);
            this.serviciosGenerados[i].setDireccion(matrizDatos[i][9]);
            this.serviciosGenerados[i].setTipoDeServicio(matrizDatos[i][11]);
            this.serviciosGenerados[i].setSeveridad(matrizDatos[i][3]);
            this.serviciosGenerados[i].setScheduleStart(matrizDatos[i][7]);
            this.serviciosGenerados[i].setRequestedBy(matrizDatos[i][13]);
        }
    }
}

export {GeneradorDeServicios};