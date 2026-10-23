

const sugerirCanciones = (minutos) => Math.floor(minutos / 3)

const formatoCancion = (nombre, genero) =>  "La cancion seleccionada es: " + nombre + ". El genero de la cancion es: " + genero 

function mostrarTotal (total, minutos) {
    alert("Playlist creada con exito.\nEl total de canciones es: " + total + "\nDuracion estimada: " + minutos + " minutos.") 
}

const calcularMinutos = (totalCanciones) => totalCanciones * 3

let tiempoDisponible = Number(prompt("Ingresa cuantos minutos tenes para escuchar musica hoy.\nTe sugerimos cuantas canciones agregar a tu playlist"))

if (tiempoDisponible > 0) {
    let sugerencia = sugerirCanciones (tiempoDisponible)
    alert("Tu tiempo disponible es de: " + tiempoDisponible + " minutos." + " Te sugerimos agregar: " + sugerencia + " canciones")

}



let continuar = true 

let contadorCanciones = 0

while (continuar) {
    let cancion = prompt("Ingresa el nombre de la cancion que deseas agregar. Para finalizar escribi ESC.")
    
    if (cancion === null || cancion.trim().toUpperCase() === "ESC") {

        continuar = false
    } 
    
    else if (cancion.trim() === "") {
        
        alert("Escribe un nombre valido o finaliza escribiendo ESC")
    }

    else { let genero = prompt("Que genero es?")
        
        contadorCanciones++
        
        let detalle = formatoCancion(cancion, genero)
            alert(detalle)
    }
}

let duracionFinal = calcularMinutos (contadorCanciones)

mostrarTotal (contadorCanciones, duracionFinal) 


