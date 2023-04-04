const formularioPasajeros = document.querySelector("#formularioPasajes")
const contenedorHTML = document.querySelector(".contenedorPasajes")

const pasajes = []

const mostrarPasajeros = () => {
    contenedorHTML.innerHTML = ""

    for(const pasaje of pasajes){
        contenedorHTML.innerHTML += `
        <div class="cardPasaje">
            <p>Nombre: ${pasaje.nombre}</h2>
            <p>Apellido: ${pasaje.apellido}</p>
            <p>Tipo DNI: ${pasaje.TipoDNI}</p>
            <p>Documento: ${pasaje.NumeroDocumento}</p>
            <p>Origen: ${pasaje.origen}</h2>
            <p>Destino: ${pasaje.destino}</p>
            <p>Fecha: ${pasaje.fecha}</p>
            <p>Horario: ${pasaje.horario}</p>
        </div>
        `
    }
}

formularioPasajeros.addEventListener("submit", (event) => {
    event.preventDefault()
    pasajes.push({
        nombre: formularioPasajeros.nombre.value,
        apellido: formularioPasajeros.apellido.value,
        TipoDNI: formularioPasajeros.TipoDNI.value,
        NumeroDocumento: formularioPasajeros.NumeroDocumento.value,
        origen: formularioPasajeros.origen.value,
        destino: formularioPasajeros.destino.value,
        fecha: formularioPasajeros.fecha.value,
        horario: formularioPasajeros.horario.value
    })
    mostrarPasajeros();
})