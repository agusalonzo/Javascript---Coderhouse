//if - else - else if

let usuario = "Empleado 1"

if (usuario === "Empleado 1") {
    console.log("Bienvenido a tu perfil, Empleado 1")
}

else if (usuario === "Administrador 1") {
    console.log("Bienvenido al panel de Administrador")
}

else if (usuario === "Empleado 2") {
    console.log("Bienvenido a tu perfil, Empleado 2")
}

else {
    console.log("Tu usuario no esta registrado")
}

/////////////

let stockRemeras = 10

if (stockRemeras <= 10) {
    console.log("Podes avanzar con tu compra")
}

else{
    console.log("Por el momento no tenemos stock")
}

//////// switch

let compra = "remera roja"

switch (orden) {
    case "buzo verde":
        console.log("El buzo sale $35.000")
        break
    case "remera roja":
        console.log("La remera sale $15.000")
        break
    case "jean azul":
        console.log("El jean azul sale $60.000")
    default:
        console.log("Perdon, no tenemos stock")
}