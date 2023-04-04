const letras = ["A","B","C","","D","E","F"];

let nroReserva = document.getElementById("nroReserva").value

const contenedorDatos = document.querySelector(".contenedorDatos")

let pasajero = "";

fetch("./bd/bd.json")
    .then(response => response.json())
    .then(arrayPasajeros => {
        pasajeros = arrayPasajeros})

 
        

const botonOnClick = (e) =>{
    const ventanaNumAsiento = document.getElementById("asientoSeleccionado");
    ventanaNumAsiento.textContent = (e.target.innerHTML);
}



const mostrarAsientos = () =>{

    const btnSelecAsient = document.getElementById("btnSeleccionAsiento");
    btnSelecAsient.disabled = true; //desactiva el boton elegir asiento

    const cajaAsientos = document.getElementById("mostrarAsientos");

    for (let i = 0; i < 7; i++) {
        if (i == 3) {
            const newElement = document.createElement("button");
            newElement.classList.add("pasillo");
            cajaAsientos.appendChild(newElement);
        }
        else{
            for (let index = 0; index < 10; index++) {
                const numAsiento = letras[i] + (index + 1);

                const newElement = document.createElement("button");

                for(p of pasajeros){
                    if (p.asiento == numAsiento){
                        newElement.classList.add("asientoOcupado");
                    }else{
                        newElement.classList.add("asientoVacio");
                    }
                }
                newElement.textContent = numAsiento;
                cajaAsientos.appendChild(newElement);
                newElement.addEventListener("click" , botonOnClick);
            }
        }
    }
}



const mostrarDatos = () => {
    nroReserva = document.getElementById("nroReserva").value;

    if (document.getElementById("caja")) {
        document.getElementById("caja").remove()
    }

    for(pas of pasajeros){
        if (pas.codReserva == nroReserva) {
            pasajero = pas
            contenedorDatos.innerHTML += `
            <div id="caja" class="contenedorAsientos">
                <label class="">Bienvenido/a: ${pasajero.nombre} ${pasajero.apellido}</label>
                <label class="" for="txtNombre">Estado del vuelo</label>    
                <input class="" type="text" id="txtNombre" placeholder="Normal">
                <button class="btn" id="btnSeleccionAsiento" onclick="mostrarAsientos()">Seleccionar asiento</button>
                <p class="" id="asientoSeleccionado"></p>
                <button class="btn" id="botonGuardar" onclick="asignarAsiento()">Confirmar</button>
                <div id="mostrarAsientos" class="contenedorAsientos"></div>
            </div>
            `
        }       
    }

    if (!document.getElementById("caja")) {
        contenedorDatos.innerHTML += `
            <div id="caja">
                <label class="">El numero de reserva no es valido</label>
            </div>
            `
    }    
}



const asignarAsiento = () => {
    if (document.getElementById("mostrarAsientos")) {
        if (document.getElementById("asientoSeleccionado").innerHTML.length == 2) {
            document.getElementById("mostrarAsientos").remove()            
        }
    }
    for (p of pasajeros) {
        if (p == pasajero & document.getElementById("asientoSeleccionado").innerHTML != "") {
            p.asiento = document.getElementById("asientoSeleccionado").innerHTML;        
        }
    }
}


