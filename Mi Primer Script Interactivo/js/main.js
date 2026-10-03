const nombre = prompt("Cual es tu nombre?")
const apellido = prompt("Cual es tu apellido?")
let fechaNacimiento = parseInt(prompt("En que año naciste?"))

const edad = 2026 - fechaNacimiento

console.log("Hola " + nombre + " " + apellido + "." + " Tu edad es: " + edad)