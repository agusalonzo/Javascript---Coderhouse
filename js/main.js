

const descuento = 0.90

class Producto {
  static id = 0
  constructor (categoria, nombre, stock, precio) {
    this.id = ++Producto.id,
    this.categoria = categoria,
    this.nombre = nombre,
    this.stock = stock,
    this.precio = precio
  }

  descuentoTransfer = () => {
    return this.precio*descuento
  }
}

const productos = [
  new Producto("Chocolate", "Bombon Nutella", 20, 4000),
  new Producto("Galleta", "Galletas Navideñas", 30, 10000),
  new Producto("Chocolate", "Choco Oreos", 15, 7000)
]

const carritos = []


const agregarProductos = () => {
  let productosDisponibles = productos.map(producto => producto.nombre)
  
  let productoNuevo = prompt("Escribe el producto deseado.\n\n Productos disponibles: " + productosDisponibles.join(", ") + "\n\nEscribe ESC para ir el menu principal")

  while (productoNuevo !== null && productoNuevo.toUpperCase() !== "ESC"){
    let busqueda = productoNuevo.trim().toLowerCase()
    if (busqueda === ""){
      alert("Ingresa un producto valido.")
    } else {
      let prodEncontrado = productos.find(prod => prod.nombre.toLowerCase() === busqueda)

      if (prodEncontrado) {
        carritos.push(prodEncontrado)
        console.log("Agregaste: " + prodEncontrado.nombre + " al carrito")
      } else {
        alert("El producto no esta en catalogo")
      }
    }
    productoNuevo = prompt("Escribe otro producto deseado.\n\nProductos disponibles: " + productosDisponibles.join(", ") + "\n\nEscribe ESC para ir al menú principal")
  }
}



const obtenerProductosPorCategoria = (categoria) => {
  return productos.filter(prod => prod.categoria.toLowerCase() === categoria.trim().toLowerCase())
}

const mostrarProductosFiltrados = (categoria, lista) => {
  console.log("==> PRODUCTOS EN LA CATEGORÍA " + categoria.toUpperCase() + ":")
  lista.forEach(prod => console.log("- " + prod.nombre + " ($" + prod.precio + ")"))
}

const filtrarPorCategoria = () => {
  let catBuscada = prompt("Ingresa la categoría que deseas ver (ej: Chocolate, Galleta):")

  if (catBuscada !== null && catBuscada.trim() !== "") {
    let filtrados = obtenerProductosPorCategoria(catBuscada)

    if (filtrados.length > 0) {
      mostrarProductosFiltrados(catBuscada, filtrados)
    } else {
      alert("No se encontraron productos en esa categoría.")
    }
  }
}


const buscarIndiceEnCarrito = (nombre) => {
  let busqueda = nombre.trim().toLowerCase()
  return carritos.findIndex(item => item.nombre.toLowerCase() === busqueda)
}

const quitarDelCarrito = (indice) => {
  let eliminado = carritos.splice(indice, 1)
  alert("Se eliminó " + eliminado[0].nombre + " del carrito")
  console.log("Eliminaste: " + eliminado[0].nombre + " del carrito")
}

const pedirProductoAEliminar = () => {
  let nombresEnCarrito = carritos.map(item => item.nombre).join(", ")
  return prompt("Productos en tu carrito: " + nombresEnCarrito + "\n\nEscribe el nombre del producto que deseas quitar:")
}

const eliminarProducto = () => {
  if (carritos.length === 0) {
    alert("No hay productos en el carrito para eliminar")
  } else {
    let productoAEliminar = pedirProductoAEliminar()

    if (productoAEliminar !== null && productoAEliminar.trim() !== "") {
      let indice = buscarIndiceEnCarrito(productoAEliminar)

      if (indice !== -1) {
        quitarDelCarrito(indice)
      } else {
        alert("Ese producto no esta en tu carrito")
      }
    }
  }
}


const mostrarCarrito = () => {
  console.log("==> PRODUCTOS EN TU CARRITO:")
  carritos.forEach(carrito => console.log(carrito.nombre))
  console.log("Tenes: " + carritos.length + " producto(s) en carrito")
}

const pagaConTransferencia = () => {
  let formaDePago = prompt("Pagas con transferencia? Escribe SI o NO")
  return formaDePago !== null && formaDePago.toUpperCase().trim() === "SI"
}

const calcularTotalConDescuento = () => {
  return carritos.reduce((acumulado, carrito) => acumulado + carrito.descuentoTransfer(), 0)
}

const verCarrito = () => {
  if (carritos.length === 0) {
    alert("No hay productos agregados")
  } else {
    mostrarCarrito()

    if (pagaConTransferencia()) {
      console.log("Total a pagar con transferencia: " + calcularTotalConDescuento())
    } else {
      console.log("No hay descuento, pero igual tenes envio gratis!")
    }
  }
}


let menu = parseInt(prompt("Bienvenido a Kosmos Nova Regaleria. Ingrese:\n  1 Ver el carrito\n\n 2 Agregar productos\n\n 3 Eliminar productos\n\n 4 Filtrar productos por categoria\n\n 5 Salir"))

while(menu !== 5) {
  switch(menu) {
      case 1:
          verCarrito()
          break
      case 2:
          agregarProductos()
          break
      case 3:
          eliminarProducto()
          break
      case 4:
          filtrarPorCategoria()
          break
      default:
          alert("Opcion incorrecta")
  }
  menu = parseInt(prompt("Bienvenido a Kosmos Nova Regaleria. Ingrese:\n  1 Ver el carrito\n\n 2 Agregar productos\n\n 3 Eliminar productos\n\n 4 Filtrar productos por categoria\n\n 5 Salir"))
}