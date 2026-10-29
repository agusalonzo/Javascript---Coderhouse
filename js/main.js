// simulador ecommerce regaleria dulces


const catalogo = ["Trufas Patagonia", "Choco Oreo", "Bombones Nutella", "Especial Halloween", "Paletas"]

catalogo.push("Choco Sorpresa")
catalogo.unshift("Promo del dia")

const agotado = catalogo.pop(); 
console.log(`Sin stock. Se ha eliminado el elemento: ${agotado}`)

const buscado = prompt("¿Qué dulce buscas?")

if (catalogo.includes(buscado)) {
  const posicion = catalogo.indexOf(buscado)
  console.log(`✅ "${buscado}" está en stock, en la posición ${posicion}`)
} else {
  console.log(`❌ "${buscado}" no está en stock`)
}


catalogo.splice(2, 1, "Box Premium") 


function listarStock(lista) {
  console.log("--- Stock actual ---")
  for (const producto of lista) {
    console.log(`Producto: ${producto}`)
  }
  console.log(`Total: ${lista.length} productos`)
}

listarStock(catalogo)
