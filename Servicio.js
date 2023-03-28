class Servicio{
    #legajoServicio ="";
    #SR = 0;
    #task = 0;
    #nombreDelSitio = "";
    #direccion = "";
    #tipoServicio = "";
    #severidad = "";
    #scheduleStart = "";
    #requestedBy = ""; 
    #status = "";
    
    getLegajoServicio(){
        return this.#legajoServicio;
    }

    setLegajoServicio(legajo){
        this.#legajoServicio = legajo;
    }

    getSR(){
        return this.#SR;   
    };

    setSR(numeroSR){
        this.#SR= numeroSR;
    }  
    
    getTask(){
        return this.#task;
    }
    
    setTask(numeroTask){
        this.#task = numeroTask;
    }

    getNombreDelSitio(){
        return this.#nombreDelSitio;
    }

    setNombreDelSitio(nombre){
        this.#nombreDelSitio= nombre;
    }

    getDireccion(){
        return this.#direccion;
    }

    setDireccion(direccion){
        this.#direccion = direccion;
    }

    getTipoDeServicio(){
        return this.#tipoServicio;
    }

    setTipoDeServicio(tipo){
        this.#tipoServicio = tipo;
    }

    getSeveridad(){
        return this.#severidad;
    }

    setSeveridad(severidad){
        this.#severidad = severidad;
    }

    getScheduleStart(){
        return this.#scheduleStart;
    }

    setScheduleStart(fechaHora){
        this.#scheduleStart = fechaHora;
    }
    
    getRequestedBy(){
        return this.#requestedBy;
    }

    setRequestedBy(fechaHora){
        this.#requestedBy = fechaHora;
    }

    getStatus(){
        return this.#status;
    }

    setStatus(status){
        this.#status = status;
    }
};

export {Servicio};