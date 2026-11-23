
// variable descuento transfer

const descuento = 0.90

// clase constructora

class Producto {
  static id = 0
  constructor(categoria, nombre, stock, precio) {
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

// objetos

const productos = [
  new Producto("Chocolate", "Bombon Nutella", 20, 4000),
  new Producto("Galleta", "Galletas Navideñas", 30, 10000),
  new Producto("Chocolate", "Choco Oreos", 15, 7000)
]

// carrito vacio
const carritos = []

// nodos

const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("contenedor-carrito")
const totalCarrito = document.getElementById("total-carrito")
const checkTransferencia = document.getElementById("check-transferencia")
const inputBusqueda = document.getElementById("input-busqueda")
const formCheckout = document.getElementById("form-checkout")
const mensajeCheckout = document.getElementById("mensaje-checkout")



const calcularTotal = () => {
  const pagaConTransfer = checkTransferencia.checked
  
  const total = carritos.reduce((acum, item) => {
    if (pagaConTransfer) {
      return acum + item.descuentoTransfer()
    } else {
      return acum + item.precio
    }
  }, 0)

  totalCarrito.textContent = `Total: $${total.toLocaleString("es-AR")}`
  return total
}


const renderizarCatalogo = (lista) => {
  contenedorProductos.innerHTML = ""

  if (lista.length === 0) {
    contenedorProductos.innerHTML = "<p>No se encontraron productos.</p>"
    return
  }

  // se agregan las cards
  
  lista.forEach((producto) => {
    const card = document.createElement("div")
    card.classList.add("tarjeta-producto")


    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Categoría: <strong>${producto.categoria}</strong></p>
      <p>Stock disponible: ${producto.stock}</p>
      <p class="precio">$${producto.precio}</p>
    `


    const boton = document.createElement("button")
    boton.innerText = producto.stock === 0 ? "Sin stock" : "Agregar al carrito"
    boton.disabled = producto.stock === 0

    boton.onclick = () => {
      if (producto.stock > 0) {
        producto.stock--
        carritos.push(producto)
        renderizarCarrito()
        aplicarFiltroBusqueda()
      }
    }

    card.appendChild(boton)
    contenedorProductos.appendChild(card)
  })
}

const renderizarCarrito = () => {
  contenedorCarrito.innerHTML = ""

  if (carritos.length === 0) {
    contenedorCarrito.innerHTML = "<p>El carrito está vacío.</p>"
    totalCarrito.textContent = "Total: $0"
    return
  }

  carritos.forEach((item, index) => {
    const fila = document.createElement("div")
    fila.classList.add("item-carrito")

    fila.innerHTML = `<span>${item.nombre} - $${item.precio}</span>`

    const botonQuitar = document.createElement("button")
    botonQuitar.innerText = "Quitar"

    botonQuitar.onclick = () => {
      item.stock++
      carritos.splice(index, 1)
      renderizarCarrito()
      aplicarFiltroBusqueda()
    }

    fila.appendChild(botonQuitar)
    contenedorCarrito.appendChild(fila)
  })

  calcularTotal()
}

const aplicarFiltroBusqueda = () => {
  const texto = inputBusqueda.value.trim().toLowerCase()
  const filtrados = productos.filter((prod) =>
    prod.nombre.toLowerCase().includes(texto) ||
    prod.categoria.toLowerCase().includes(texto)
  )
  renderizarCatalogo(filtrados)
}

inputBusqueda.oninput = aplicarFiltroBusqueda
checkTransferencia.onchange = calcularTotal

formCheckout.onsubmit = (e) => {
  e.preventDefault()

  if (carritos.length === 0) {
    mensajeCheckout.className = "mensaje mensaje-error"
    mensajeCheckout.textContent = "Debes agregar al menos un producto al carrito para comprar."
    return
  }

  const nombreCliente = document.getElementById("input-nombre").value.trim()
  const totalAbonado = calcularTotal()

  mensajeCheckout.className = "mensaje mensaje-exito"
  mensajeCheckout.textContent = `¡Muchas gracias por tu compra, ${nombreCliente}! Total abonado: $${totalAbonado.toLocaleString("es-AR")}. Te enviamos los detalles a tu email.`

  carritos.length = 0
  renderizarCarrito()
  formCheckout.reset()
}

renderizarCatalogo(productos)
renderizarCarrito()
