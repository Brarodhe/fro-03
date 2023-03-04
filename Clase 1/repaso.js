/***
 * Tipos:
 * 1. Boolean
 * 2. String
 * 3. Number
 * 4. Undefined o null
 */

let variable; // si no se declara queda como undefined
let num = 5;
let str = "Hola";
let nombre = "Luis";
let saludo = "Hola " + nombre; // Vieja escuela para concatenar
let saludo2 = `Hola ${nombre}`;


// constantes

const PI = 3.1416; // Constantes se deben escribir en mayuscula por standard
const patito = "patito"; // una const no se puede declarar 2 veces. No muta. No se puede cambiar la referencia (booleans, string, numbers)
patito = "Pato"; // Error

//objetos y arreglos
const persona = {};
persona.nombre = "Luis";
persona.edad = 29;

const arreglo = [1, 2, 3];
arreglo.push(1);
const arreglo1 = [...arreglo];