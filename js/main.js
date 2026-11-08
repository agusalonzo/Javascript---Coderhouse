
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

const nutella = new Producto ("Chocolate", "Bombon Nutella", 20, 4000)
const galleta = new Producto ("Galleta", "Galletas Navideñas", 30, 10000)
const chocoOreo = new Producto ("Chocolate", "Choco Oreos", 15, 7000)

const productos = [nutella, galleta, chocoOreo]

const carritos = []


const agregarProductos = () => {
  let productosDisponibles = []
  for (const producto of productos)  {
    productosDisponibles.push(producto.nombre)
  }
  
  let productoNuevo = prompt("Escribe el producto deseado.\n\n Productos disponibles: " + productosDisponibles.join(", ") + "\n\nEscribe ESC para ir el menu principal")

  while (productoNuevo !== null && productoNuevo.toUpperCase() !== "ESC"){
    let busqueda = productoNuevo.trim().toLowerCase()
    if (busqueda === ""){
      alert("Ingresa un producto valido.")
    } else{
      let encontrado = false
      
      for (const prod of productos) {
        if (prod.nombre.toLowerCase() === busqueda) {
          carritos.push(prod)
          console.log("Agregaste: " + productoNuevo + " al carrito")
          encontrado = true 
          break
        }
      }
      if (encontrado === false) {
        alert("El producto no esta en catalogo")
      }
    }
    productoNuevo = prompt("Escribe otro producto deseado.\n\nProductos disponibles: " + productosDisponibles.join(", ") + "\n\nEscribe ESC para ir al menú principal")
  }
}

const verCarrito = () => {
  if(carritos.length == 0) {
      alert("No hay productos agregados")
  } else {
      console.log("==> PRODUCTOS EN TU CARRITO:")
      for (const carrito of carritos)
        console.log(carrito.nombre)
      console.log("Tenes: " + carritos.length + " producto(s) en carrito")
      
      let formaDePago = prompt("Pagas con transferencia? Escribe SI o NO")
  
      if (formaDePago.toUpperCase().trim() == "SI") {
        let totalConDescuento = 0
        
        for (const carrito of carritos) {
          totalConDescuento += carrito.descuentoTransfer()
        }
        console.log("Total a pagar con transferencia: " + totalConDescuento)
      } else {
        console.log("No hay descuento, pero igual tenes envio gratis!")
      }
    }
  }

let menu = parseInt(prompt("Bienvenido a Kosmos Nova Regaleria. Ingrese:\n  1 para ver el carrito\n\n 2 para agregar al carrito\n\n 3 para salir"))

while(menu !== 3) {
  switch(menu) {
      case 1:
          verCarrito()
          break
      case 2:
          agregarProductos()
          break
      default:
          alert("Opcion incorrecta")
  }
  menu = parseInt(prompt("Bienvenido a Kosmos Nova Regaleria. Ingrese:\n  1 para ver el carrito\n\n 2 para agregar al carrito\n\n 3 para salir"))
}