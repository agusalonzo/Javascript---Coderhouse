

// Funcionar sin errores: No debe haber errores de sintaxis al abrir el archivo.
//Combinar estructuras: Debe existir al menos un bucle que contenga un condicional dentro.
//Interactividad: El script debe interactuar con el usuario mediante prompt o console.log.

// Simulador: creacion de playlist

let continuar = true 

let contadorCanciones = 0

while (continuar) {
    let cancion = prompt("Ingresa el nombre de la cancion que deseas agregar. Para finalizar escribi ESC.")
    
    if (cancion === null || cancion.trim().toUpperCase() === "ESC") {

        continuar = false
        alert("Playlist creada.")
    } 
    
    else if (cancion.trim() === "") {
        
        alert("Escribe un nombre valido o finaliza escribiendo ESC")
    }

    else { let genero = prompt("Que genero es?")
        
        contadorCanciones++
        
        alert("Cancion agregada:" + cancion + ". Genero: " + genero)
        }
    }
alert("Total de canciones en tu playlist:" + contadorCanciones)
