/* punto 1 */
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");

// Convertir la edad a un número
edad = parseInt(edad);

// Calcular la edad el próximo año
let edadProximoAnio = edad + 1;

// Mostrar el mensaje por consola usando template strings
console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadProximoAnio} años.`);


/* punto 2 */
let figura = prompt("¿De qué figura quieres calcular el área? (triángulo, rectángulo o círculo)");

if (figura === "triángulo") {
  let base = prompt("Ingresa la base del triángulo:");
  let altura = prompt("Ingresa la altura del triángulo:");

  // Convertir las variables a números
  base = parseFloat(base);
  altura = parseFloat(altura);

  // Calcular el área del triángulo
  let area = (base * altura) / 2;

  console.log(`El área del triángulo es ${area}`);
} else if (figura === "rectángulo") {
  let base = prompt("Ingresa la base del rectángulo:");
  let altura = prompt("Ingresa la altura del rectángulo:");

  // Convertir las variables a números
  base = parseFloat(base);
  altura = parseFloat(altura);

  // Calcular el área del rectángulo
  let area = base * altura;

  console.log(`El área del rectángulo es ${area}`);
} else if (figura === "círculo") {
  let radio = prompt("Ingresa el radio del círculo:");

  // Convertir la variable a número
  radio = parseFloat(radio);

  // Calcular el área del círculo
  let area = Math.PI * radio ** 2;

  console.log(`El área del círculo es ${area}`);
} else {
  console.log("Lo siento, no reconozco esa figura.");

}

/* punto 3 */
let nume = prompt("Ingresa un número:");

// Convertir la variable a número
nume = parseInt(numero);

// Iterar desde 1 hasta el número ingresado
for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) {
    console.log(`${i} - es par`);
  } else {
    console.log(`${i} - es impar`);
  }
}


/* punto 4 */
let numero = prompt("Ingresa un número entero mayor que 1:");

// Convertir la variable a número
numero = parseInt(numero);

// Verificar si el número es mayor que 1
if (numero <= 1) {
  console.log("El número debe ser mayor que 1.");
} else {
  let esPrimo = true;

  // Iterar desde 2 hasta el número - 1
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  // Mostrar el resultado
  if (esPrimo) {
    console.log(`${numero} es un número primo.`);
  } else {
    console.log(`${numero} no es un número primo.`);
  }
}

/* punto 5 */
let num = prompt("Ingresa un número entero mayor que cero:");

// Convertir la variable a número
num = parseInt(numero);

// Verificar si el número es mayor que cero
if (numero <= 0) {
  console.log("El número debe ser mayor que cero.");
} else {
  let factorial = 1;

  // Iterar desde el número hasta 1
  for (let i = numero; i >= 1; i--) {
    factorial *= i;
  }

  // Mostrar el resultado
  console.log(`El factorial de ${numero} es ${factorial}.`);
}

/* punto 6*/
let suma = 0;
let contador = 0;

while (suma <= 50) {
  let numero = parseInt(prompt("Ingresa un número:"));
  
  if (isNaN(numero)) {
    console.log("Debes ingresar un número válido.");
    continue;
  }

  suma += numero;
  contador++;
}

console.log(`El total acumulado es ${suma} y se han introducido ${contador} números.`);

/* punto 7*/
// Creamos el primer array
const numeros = [5, 9, 12, 7, 3];

// Creamos los arrays vacíos para los números pares e impares
const pares = [];
const impares = [];

// Recorremos el primer array y multiplicamos cada número por un número aleatorio entre 1 y 10
numeros.forEach(numero => {
  const aleatorio = Math.floor(Math.random() * 10) + 1; // Generamos un número aleatorio entre 1 y 10
  const resultado = numero * aleatorio; // Multiplicamos el número por el número aleatorio generado
  console.log(`${numero} x ${aleatorio} = ${resultado}`); // Mostramos la multiplicación y su resultado en la consola
  
  if (resultado % 2 === 0) { // Verificamos si el resultado es par
    pares.push(resultado); // Si es par, lo agregamos al array de pares
  } else {
    impares.push(resultado); // Si es impar, lo agregamos al array de impares
  }
});

// Mostramos los arrays de pares e impares en la consola
console.log(`Números pares: ${pares}`);
console.log(`Números impares: ${impares}`);

/* punto 8 */
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = prompt("Introduce tu número de DNI:");
const dniNumber = parseInt(dni);

if (dniNumber >= 0 && dniNumber <= 99999999) {
  const letraIndex = dniNumber % 23;
  const letraDNI = letras[letraIndex];
  console.log(`La letra correspondiente a tu DNI ${dni} es: ${letraDNI}`);
} else {
  console.log("El número de DNI introducido no es válido.");
}

/* punto 9*/
const palabra = prompt("Introduce una palabra:");
const longitud = palabra.length;

let consonantes = 0;
let vocales = 0;

for (let i = 0; i < longitud; i++) {
  const letra = palabra.charAt(i).toLowerCase();
  if (/[aeiou]/.test(letra)) {
    vocales++;
  } else if (/[b-df-hj-np-tv-z]/.test(letra)) {
    consonantes++;
  }
}

console.log(`La palabra "${palabra}" tiene ${consonantes} consonantes, ${vocales} vocales y una longitud de ${longitud} caracteres.`);

/* punto 10 */
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
const colorUsuario = prompt("Introduce un color:");

if (colores.includes(colorUsuario)) {
  console.log(`El color ${colorUsuario} se encuentra en el array.`);
} else {
  console.log(`El color ${colorUsuario} no se encuentra en el array.`);
}