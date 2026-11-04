// simulador ecommerce regaleria dulces

const productos = ["oreo", "trufas", "bombon", "tableta", "galletas"]

const carritos = []

function agregarProducto() {
  let productoNuevo = prompt("Escribe el producto deseado.\n\n Productos disponibles: " + productos.join(", ") + "\n\nEscribe ESC para ir el menu principal")

  while ( productoNuevo !== null && productoNuevo.toUpperCase() !== "ESC") {
    productoNuevo = productoNuevo.toLocaleLowerCase()

    if (productos.includes(productoNuevo)) {
      carritos.push(productoNuevo)
      console.log("Agregaste el producto: " + productoNuevo)
    } else {
      alert("Este producto no esta en catalogo")
    }

    productoNuevo = prompt("Escribe otro producto.\nEscribe ESC para ir al menu principal")
  }
}

function mostrarCarrito() {
  if (carritos.length == 0) {
    console.log("Tu carrito esta vacio 😭")
  } else {
    console.log("=== CARRITO DE COMPRAS ===")
    for (const carrito of carritos) {
      console.log(" - " + carrito)
    }
    console.log("Total: " + carritos.length + " productos")
  }
}

function borrarProducto() {
  if (carritos.length == 0) {
    alert("¡Tu carrito esta vacio, no hay nada para borrar!")
    return
  }
  let productoQueBorra = prompt("Ingrese el producto que desea eliminar")
  if (productoQueBorra === null || productoQueBorra.trim() === "") return;

  let indice = carritos.indexOf(productoQueBorra.toLowerCase()) 

  if (indice === -1) {
    alert("No se encontro " + productoQueBorra + " en el carrito.")
    return
  }

  let reemplazo = prompt("Escribe el producto por el que cambias\n\n Escribe ESC solo para borrar")
  if (reemplazo === null) return

  if (reemplazo.toUpperCase() === "ESC") {
    carritos.splice(indice, 1)
    alert("Se elimino: '" + productoQueBorra + "' del carrito.")
  } else if (productos.includes(reemplazo.toLowerCase())) {
    carritos.splice(indice, 1, reemplazo.toLowerCase())
    alert("Cambiaste '" + productoQueBorra + "' por '" + reemplazo + "'.")
  } else {
    alert("Ese producto no esta en catalogo, no se hizo ningun cambio.")
  }
}

function buscarProducto() {
  if (carritos.length === 0) {
    alert("¡Tu carrito está vacío, no hay nada para buscar!");
    return;
  }

  let productoABuscar = prompt("¿Qué producto querés buscar en tu carrito?");
  if (productoABuscar === null || productoABuscar.trim().toLowerCase() === "") return;

  if (carritos.includes(productoABuscar)) {
    let item = carritos.indexOf(productoABuscar);
    alert("El producto '" + productoABuscar + "' está en el carrito, es el item nº " + item);
  } else {
    alert("El producto '" + productoABuscar + "' no se encuentra en tu carrito.");
  }
}

function borrarUltimo() {
  if (carritos.length === 0) {
    alert("¡Tu carrito esta vacio!")
    return
  }
  const eliminado = carritos.pop()
  alert("Se ha eliminado el elemento: " + eliminado)
}



let continuar = true
while(continuar) {
    let opcion = parseInt(prompt("Seleccione una opcion.\n 1.Agregar producto al carrito\n 2.Mostrar carrito\n 3.Borrar o cambiar producto\n 4.Buscar producto en carrito\n 5.Borrar ultimo producto agregado "))

    switch(opcion) {
        case 1:
          agregarProducto()
          break
        case 2:
          mostrarCarrito()
          break
        case 3:
          borrarProducto()
          break
        case 4:
          buscarProducto()
          break
        case 5:
          borrarUltimo()
          break
        default:
            alert("Escribe una opcion correcta")
    }

    
    let confirmacion = prompt("¿Desea volver al menu principal? (si/no)")
    if(confirmacion == null || confirmacion.toLowerCase() == "no"){
        continuar = false
        alert("Carrito creado con exito ✅ ")
    }
}



