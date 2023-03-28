class DatosLectura{
    datos="";
    datosTecnicos="";
    datosCSV = ``;
datosTecnicosCSV = 
`nombre;Legajo;Skill;horario;disponible
Anderson Vargas;CO101F52;SLM;7:00 A 14:00;disponible
Jonatan Castro;CO101G05;SLM;8:00 A 17:00;no disponible
Roger Viera;CO101G01;SLM;8:00 A 17:00;no disponibles
Pablo Paredes;CO101G03;SLM;10:00 A 19:00;disponible
Yuder Hernandez;CO101G54;SLM;7:00 A 14:00;disponible
Diego Barbosa;CO101G48;SLM;7:00 A 14:00;disponible
Yoni Pachon;CO101E20;SLM;7:00 A 14:00;disponible
Juan Gonzalez;CO101G22;SLM;7:00 A 14:00;disponible
Edgar Miranda;CO101G73;FLM;8:00 A 17:00;no disponible
Carlos Pita;CO101G21;FLM;8:00 A 17:00;no disponible
Gerardo Carrero;CO101G16;FLM;8:00 A 17:00;no disponible
Leonardo Rodriguez;CO101G08;FLM;8:00 A 17:00;no disponible
Ivan Umana;CO101G44;FLM;8:00 A 17:00;no disponible
Michael Contreras;CO101G76;FLM;8:00 A 17:00;no disponible
Juan Guzman;CO101G06;SLM;8:00 A 17:00;disponible
Julio Chavez;CO101G12;FLM;8:00 A 17:00;no disponible
Yeferson Cumaco;CO101G85;FLM;8:00 A 17:00;no disponible
Kevin Reyes;CO101G86;FLM;8:00 A 17:00;no disponible
Jesus Guerrero;CO101G15;FLM;7:00 A 14:00;disponible
John Contreras;CO101F22;SLM;8:00 A 17:00;no disponible
Brayan Vique;CO101G65;FLM;8:00 A 17:00;no disponible
Paola Tibasosa;CO101G93;FLM;8:00 A 17:00;no disponible
`;

    getDatosCSV(){
        return this.datosCSV;
    }

    setDatosCSV(datos){
        this.datosCSV = datos;
    }

    getDatosTecnicosCSV(){
        return this.datosTecnicosCSV;
    }
    setDatosTecnicosCSV(datos){
        this.datosTecnicosCSV = datos;
    }

    convertirDatos(){
        this.datos = Papa.parse(this.datosCSV).data; 
        this.datosTecnicos = Papa.parse(this.datosTecnicosCSV).data;
    }

}
export {DatosLectura};