
import { GeneradorDeServicios } from "./GeneradorDeServicios.js";
import { GeneradorDeTecnicos } from "./GeneradorTecnicos.js";
import { GeneradorCartasTecnicos } from "./GeneradorCartaTecnico.js";
import { GeneradorCartasServicios } from "./GeneradorCartaServicio.js";
import { Servicio } from "./Servicio.js";
import { DatosLectura } from "./appLecturaArchivo.js";


const drop_dom_element_1 = document.getElementById("drop_dom_element_1");
const drop_dom_element_2 = document.getElementById("drop_dom_element_2");
let datosCSV_1 = "";
let datosCSV_2 = "";

// Este es el manejador de eventos que se activa cuando se suelta un archivo en el área de "drop" 1
async function handleDropAsync_1(e) {
  e.stopPropagation();
  e.preventDefault();
  
  e.target.classList.add("drop")

  const f = e.dataTransfer.files[0]; // Se obtiene el archivo que se ha soltado
  const data = await f.arrayBuffer(); // Se convierte el archivo en un ArrayBuffer
  const workbook = XLSX.read(data); // Se lee el archivo de Excel con la biblioteca XLSX
  
  // Convertir la primera hoja de cálculo en formato CSV y guardarla en la variable datosCSV_1
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const csv = XLSX.utils.sheet_to_csv(worksheet);
  datosCSV_1 = csv;
  
  console.log("Datos CSV 1:", datosCSV_1);
}

// Este es el manejador de eventos que se activa cuando se suelta un archivo en el área de "drop" 2
async function handleDropAsync_2(e) {
  e.stopPropagation();
  e.preventDefault();

  e.target.classList.add("drop")
  
  const f = e.dataTransfer.files[0]; // Se obtiene el archivo que se ha soltado
  const data = await f.arrayBuffer(); // Se convierte el archivo en un ArrayBuffer
  const workbook = XLSX.read(data); // Se lee el archivo de Excel con la biblioteca XLSX
  
  // Convertir la primera hoja de cálculo en formato CSV y guardarla en la variable datosCSV_2
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const csv = XLSX.utils.sheet_to_csv(worksheet);
  datosCSV_2 = csv;
  
  console.log("Datos CSV 2:", datosCSV_2);

  aplicacionEjecutable();
}

// Estos son los manejadores de eventos que se activan cuando se arrastra un archivo sobre las áreas de "drop"
function handleDragEnter(e) {
  e.stopPropagation();
  e.preventDefault();
  e.target.classList.add("dragover");
}

function handleDragOver(e) {
  e.stopPropagation();
  e.preventDefault();
}

function handleDragLeave(e) {
  e.stopPropagation();
  e.preventDefault();
  e.target.classList.remove("dragover");
}

function resetBox(){
    datosCSV_2 = "";
    drop_dom_element_2.classList.remove("drop");
    drop_dom_element_2.classList.remove("dragover");
}

// Aquí se registran los manejadores de eventos que se activan cuando se suelta un archivo en las áreas de "drop"
drop_dom_element_1.addEventListener("drop", handleDropAsync_1, false);
drop_dom_element_1.addEventListener("dragenter", handleDragEnter, false);
drop_dom_element_1.addEventListener("dragleave", handleDragLeave, false);

drop_dom_element_2.addEventListener("drop", handleDropAsync_2, false);
drop_dom_element_2.addEventListener("dragenter", handleDragEnter, false);
drop_dom_element_2.addEventListener("dragleave", handleDragLeave, false);





function aplicacionEjecutable(){
    let datosLectura = new DatosLectura();
    let generadorTecnicos = new GeneradorDeTecnicos();
    let generadorServicios = new GeneradorDeServicios();
    let generadorCartasT = new GeneradorCartasTecnicos();
    let generadorCartasS = new GeneradorCartasServicios()

    datosLectura.setDatosCSV(datosCSV_2);
    datosLectura.setDatosTecnicosCSV(datosCSV_1);
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

    resetBox();

}

document.getElementById("ir-arriba").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", function() {
    var boton = document.getElementById("ir-arriba");
    if (window.scrollY > 200) {
      boton.style.display = "block";
    } else {
      boton.style.display = "none";
    }
  });

export {aplicacionEjecutable}
