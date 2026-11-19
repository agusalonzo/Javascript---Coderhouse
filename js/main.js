// variable para descuento
const descuento = 0.90

// clase constructora
class Producto {
  static id = 0
  constructor (categoria, nombre, stock, precio) {
    this.id = ++Producto.id
    this.categoria = categoria
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
  }

  descuentoTransfer = () => {
    return this.precio * descuento
  }
}

// array de objetos (catálogo)
const productos = [
  new Producto("Chocolate", "Bombon Nutella", 20, 4000),
  new Producto("Galleta", "Galletas Navideñas", 30, 10000),
  new Producto("Chocolate", "Choco Oreos", 15, 7000)
]

// array vacío del carrito del usuario
const carritos = []

// función para armar el listado de productos disponibles
const productosDisponibles = () => {
  let disponibles = ""
  productos.forEach((producto) => disponibles += producto.nombre + " | ")
  return disponibles
}

// función para agregar productos
const agregarProductos = () => {
  const listaDisponibles = productosDisponibles()
  let prodAgregado = prompt(`Escribe el producto deseado.\n\nProductos disponibles: ${listaDisponibles}\n\nEscribe ESC para ir al menú principal`)
  
  while (prodAgregado !== null && prodAgregado.toUpperCase() !== "ESC") {
    let busqueda = prodAgregado.trim().toLowerCase()
    if (busqueda === "") {
      alert("Ingresa un producto válido.")
    } else {
      let prodEncontrado = productos.find(producto => producto.nombre.toLowerCase() === busqueda)
      if (prodEncontrado) {
        carritos.push(prodEncontrado)
        console.log(`Agregaste: ${prodEncontrado.nombre} al carrito`)
      } else {
        alert("El producto no está en el catálogo.")
      }
    }
    prodAgregado = prompt(`Escribe otro producto deseado.\n\nProductos disponibles: ${listaDisponibles}\n\nEscribe ESC para ir al menú principal`)
  }
}

// funciones para filtrado por categoría
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

// funciones para eliminación usando find
const buscarProductoEnCarrito = (nombre) => {
  let busqueda = nombre.trim().toLowerCase()
  return carritos.find(item => item.nombre.toLowerCase() === busqueda)
}

const quitarDelCarrito = (producto) => {
  let indice = carritos.indexOf(producto)
  carritos.splice(indice, 1)
  alert("Se eliminó " + producto.nombre + " del carrito")
  console.log("Eliminaste: " + producto.nombre + " del carrito")
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
      let prodEncontrado = buscarProductoEnCarrito(productoAEliminar)

      if (prodEncontrado) {
        quitarDelCarrito(prodEncontrado)
      } else {
        alert("Ese producto no esta en tu carrito")
      }
    }
  }
}

// funciones para ver y calcular el carrito
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

// menú principal interactivo
let menu = parseInt(prompt("Bienvenido a Kosmos Nova Regaleria. Ingrese:\n  1 Ver el carrito\n\n 2 Agregar productos\n\n 3 Eliminar productos\n\n 4 Filtrar productos por categoria\n\n 5 Salir"))

while (menu !== 5) {
  switch (menu) {
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
