// JAVASCRIPT

// Para nombrar los archivos como buena práctica se les nombra con el snake_case
// Ej: mi_archivo_javascript.js

// *******************************************************************************

/* 
JavaScript tiene disponible 8 tipos de datos:

- undefined
- null
- boolean
- string
- symbol
- bigint
- number
- object 
*/

// Si no se define inicialmente la variable, esta tiene un valor undefined 
let varUndefined;
//console.log(varUndefined);

// Si se realiza una operación con un valor undefined, voy a tener un resultado NaN (Not a Number)
// NaN también se obtiene cuando se realizan operaciones con otros datos diferentes a un número

//console.log(5 + varUndefined);

// Si se suma un undefined con un string, su resultado va a ser un string 'undefined'

//console.log('hola ' + varUndefined);

let varNull = null; // La diferencia con undefined es que el null es intencional
let varBoolean = true;
let varString = "Anderson";
let varNumber = 45;
let varObject = {};

// DATOS TIPO BOOLEAN

// Existen dos tipos true y false. Los distos tipos de datos tambien tienden al uno o al otro
// Por ejemplo una variable con valor 0 o un string vacio son falsos mientras que una variable
// con cualquier valor o un string así sea con solo un espacio " " son positivos
// En MDN están las listas de los objetos que tienen a ser positivos (Truthy) o negativos (Falsy)

// DATOS TIPO SYMBOL

// Permiten obtener valores que no pueden volver a ser creados, es decir, son identificadores únicos
// Para crear un tipo Symbol se hace de la siguiente forma:

let varSymbol = Symbol("varSymbol");
// console.log(varSymbol);

// Incluso si creo otro symbol del mismo valor, no va a ser igual al anterior

let varSymbol2 = Symbol("varSymbol");

// varSymbol === varSymbol2 es false
// console.log(varSymbol === varSymbol2);

// Una variable puede tomar los 8 tipos de datos. El nombre de una variable puede contener letras, números y ($) o (_) incluso comenzar por ellos a excepción de los números, nunca puede empezar por un número

// Para asignar valores a una variable se usa (=)
// También se pueden asignar una variable a otra variable

varString = varNumber;

// Los nombres de las variables y las funciones son sensibles a las mayúsculas
// Por ejemplo myVar es diferente de myvar y diferente de MYVAR
// Como buena práctica se utiliza el camelCase que consiste en poner la primer letra de las palabras aparte de la primera
// en mayúscula

let esteEsElCamelCase;

// Para las constantes se recomienda el UPPER_CASE:

const UNA_CONSTANTE = "Soy una constante";

// DIFERENCIA ENTRE VAR Y LET

// Con var es muy fácil sobreescribir una declaración de variable:

var varNumber2 = 20;
var varNumber2 = 55;
// console.log(varNumber2);

// Cuando el código es pequeño, esto no representa un problema, pero entre más grande más son las probabilidades
// de que se sobrescriba por accidente.
// Para eso el ES6 (ECMAScript 6) introdujo la keyword let, así si se quiere sobreescribir, esto arrojaría error:

let letNumber = 30;
// let letNumber = 20; --> esto arroja error

// De esta forma con let la variable solo puede ser declarada una vez

// *******************************************************************************

// OPERADORES 

// + Suma
// - Resta
// * Multiplicación
// / División
// % Módulo --> Devuelve el resto de una división

let i = 0;

i = 5 + 2;
i = 5 - 2;
i = 5 * 2;
i = 5 / 2;
i = 5 % 2;
//console.log(i);

// Es lo mismo

i = i + 1;
i++;

i = i - 1;
i--;

i = i + 5;
i += 5;

i = i - 5;
i -= 5;

i = i * 5;
i *= 5;

i = i / 5;
i /= 5;

// OPERADORES RELACIONALES 

// <, >, <=, >=
// Comparan valores ya sea mayor, menor, mayor o igual, menor o igual
// De igual forma que (==) comparan valores así sean de distintos tipos de datos como: "3" < 5 lo que sería true
// console.log(9 > 8); // True
// console.log(9 < 8); // False
// console.log(9 <= 8);  // False
// console.log(9 >= 8);  // True

// =
// 1 igual es asignación de lo de la derecha a lo que está a la izquierda

// ==
// 2 iguales es comparación de valores
// Usar 2 iguales se considera una mala práctica
// console.log(7 == 7);  // True
// console.log("7" == 7);  // True, aunque uno sea un string y el otro un número

// ===
// 3 iguales es comparación de tipo de dato y valores
// Por buenas prácticas de programación, este tipo de comparación es la que se debe usar
// console.log(7 === 7);  // True
// console.log("7" === 7);  // False

// !=
// !==
// Se comportan igual que == y === pero de opustos

// OPERADORES LÓGICOS

// ! (NOT)
// || (OR)
// && (AND)

// console.log(!false);
// console.log(8 < 9 || 9 < 8);
// console.log(8 < 9 && 8 <= 8); 

// *******************************************************************************

// STRINGS

// Se definen con las comillas dobles o sencillas, JS acepta cualquiera de las dos, siempre y cuando 
// se empiece y se termine con las misma:

'Hola' === "Hola"

// Toca decidir cual tipo de comillas usar cuando se van a trabajar con las dos en el mismo string

// Cuando se requieren concatenar varios string, contenidos en variables se pueden usar los Template strings
// Para esto se usa la tilde invertida (`) y las variables se ponen entre llaves (curly braces) precedidas por $

let nombre = "Anderson";
let apellido = "Marín"
varString = `Mi nombre es ${nombre} ${apellido}`; // Investigar esta forma de definir un String
// console.log(varString);

// Si se quiere poner (') o (") dentro del string se usa poniendo el backslash antes de las comillas

varString = "Soy un \"String\".";
// console.log(varString);

// El backslash (\) no solamente se usa para poner comillas dentro de otras comillas
// También se usan con otros caracteres

/*
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b word boundary
\f form feed
*/

// Para concatenar dos estrings se puse hacer con el operador (+)

varString = "Anderson" + " Marín";

// También se puede usar el +=

varString += " Uribe";

// también se pueden agregar variables a la concatenación con el (+)

let miNombre = "Anderson";
varString = "Mi nombre es " + miNombre; // También permite trabajar con +=

// Para ver el tamaño de un string se usa el método .length

varNumber = miNombre.length;

// Para acceder a una posición específica de un string, se puede usar la bracket notation []

varString = "";
varString = miNombre[0];

// Los datos individuales de un string son inmutables, es decir, una vez creados no se pueden editar

// *******************************************************************************

// ARRAYS

// Sirven para almacenar varios datos

varArray = ["uno", "dos", "tres", "cuatro"];

// También se pueden almacenar arrays dentro de un array, se llaman multidimentional arrays

varArray = [["Uno", 1], ["dos", 2]];

// Para acceder a los datos de un array se usa el sistema bracket notation y el primer dato está en la posición 0

varArray = ["uno", "dos", "tres", "cuatro"];
//console.log(varArray[1]);

// A diferencia de los strings, en los arrays si se pueden modificar los datos incluso si se declaró como constante

const constArray = [25, 15, 30];
constArray[0] = 50;
// console.log(constArray);

// Una forma para acceder a los datos de un multidimensional array es con el sistema de brackets

varArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

// console.log(varArray[3]); // Va a ser igual a [[10, 11, 12], 13, 14]
// console.log(varArray[3][0]); // Va a ser igual a [10, 11, 12]
// console.log(varArray[3][0][1]); // Va a ser igual a 11

// Una forma de añadir elementos a un array es con la función .push() la cual añade el o los elementos 
// al final del array y entrega el array resultante

varArray = [5, 8, 9];
varArray.push(2);
// console.log(varArray);

varArray.push(5 , 6);
// console.log(varArray);

varArray.push([1, 2, 3]);
// console.log(varArray);

// Para eliminar el último elemento de un array se utiliza la función .pop() la cual elimina el último 
// valor y lo retorna pudiéndose guardar en una variable

varString = varArray.pop();
// console.log(varString);

varArray.pop();
// console.log(varArray);

// Si se quiere remover no el último valor del array sino el primero, entonces se usa la función
// .shift();

varNumber = varArray.shift();
// console.log(varNumber);

varArray.shift();
// console.log(varArray);

// Y para añadir elementos al inicio del array existe .unshift() que trabaja igual que .push()

varArray.unshift(20);
// console.log(varArray);

varArray.unshift(50, 100);
// console.log(varArray);

// .of permite crear un arreglo
varArray = Array.of("a", "b", 1, 2);
// console.log(varArray);

// .fill podemos llenar un array Arrat(# de posiciones).fill(valor a llenar)
varArray = Array(10).fill(true);
// console.log(varArray);

// *******************************************************************************

// FUNCTIONS

// Es código reutilizable:

function Saludo() {
  console.log("Hello");
}

// Hay dos tipos, funciones declaradas y funciones expresadas:

// Función declarada

function funcionDeclarada() {
  console.log("Soy una función declarada");
}

// Todo el código dentro de las llaves se ejecuta cuando se invoca la función.
// Para invocar la función se escribe el nombre de esta seguido de paréntesis:

// Saludo();

// También se puede crear una función que requiera algunos datos que se le deben dar al invocar la función
// Estos dátos que pide la función se llaman parámetros y cuando se le dan los parámetros a la función
// cuando esta se invoca, se llaman argumentos

function testFun(param1, param2) {  
  console.log(param1, param2);
}

// testFun("Hello", "World");

// Si se llama la función sin definirle los parámetros, este los va a tomar como undefined
// Para solucionar esto, se pueden definir valores por defecto, tan solo igualando en la función el parámetro
// al dato que queremos sea por defecto

function paramPreDefinidos(nombre = "Desconocido", apellido = "Desconocido") {
  console.log(`Mi nombre es ${nombre} ${apellido}`)
}

// paramPreDefinidos();

// Si se quiere devolver un valor desde la función se utiliza return

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
// console.log(answer);

// NOTA: Se debe tener en cuenta que la función se ejecuta hasta el return, de ahí en adelante no lo tendría en cuenta

function otraFuncion() {
  console.log(10);
  console.log(20);
  return "Hasta aquí llega";
  console.log(40);  // Incluso se pone de un color más claro
}

// otraFuncion();

// SCOPE

// El scope de una variable es la visibilidad que esta tiene en el código.

// Por ejemplo las variables declaradas fuera de una función de bloque, tienen scope Global, es decir,
// se pueden en todo el programa. Las variables declaradas sin let o const tienen automáticamente scope global.
// Esto puede generar consecuencias inesperadas durante la ejecución del código. Por lo tanto siempre se debe crear una
// variable con let o const

// Las variables declaradas dentro de una función tienen un scope local

function myTest() {
  const loc = "foo";
  console.log(loc);
}

// myTest();
// console.log(loc); // Sale error porque loc está definida dentro de la función

// Es posible tener dos variables una con scope local y otra con scope global, las dos con el mismo nombre.
// Esto debido a que la variable local tiene prioridad sobre la global

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

// console.log(myFun()); // Va a imprimir "Head" ya que la variable local tiene prioridad sobre la global

// Las funciones no necesariamente deben usar el return. Este solo se usa si se quiere retornar algún dato

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

// console.log(sum);

// También es posible asignar a una variable el valor retornado de una función

// Tomando la función creada en líneas arriba plusThree(num);

varNumber = 0;
varNumber = plusThree(5);
// console.log(varNumber);

// La función y la invocación de esta función pueden ir en cualquier posición ya que JavaScript lo que
// hace es organizar primero las variables y funciones

// HolaMundo();

function HolaMundo() {
  console.log("Hola Mundo");
}

// Funciones expresadas (funciones anónimas)

// Es una función que se le a asignado a una variable

const funcionExpresada = function() {
  console.log("Esto es una función expresada");
}

// En este tipo de funciones si se invoca antes de ser expresada, JavaScript va a arrojar un error

// *******************************************************************************

// OBJETOS

// A diferencia de los array que contienen mucha información relacionada entre sí, los objetos contienen mucha información sobre una sola cosa. Se definen usando las llaves { }.
// La información que puede contener un objeto puede ser de cualquier tipo, incluso un objteto. A esta información se le llama atributo. Cuando esta información es una función, ya no se llama atributo sino método:

const ObjetoNuevo = {};
// console.log(ObjetoNuevo);

const Anderson = {
  nombre: "Anderson",
  apellido: "Marín",
  edad: 33,
  pasatiempos: ["leer", "ver series", "dibujar", "ciclismo"],
  soltero: true,
  contacto: {
    email: "andersonmarindev@gmail.com",
    nick: ["anmarinur", "anmarinur_dev"]
  },
  saludar: function() {
    console.log(`Hola ${nombre}`);
  },
  imprimir: function() {
    console.log(`Este es mi nick @${this.contacto.nick[0]}`);
  }
}
// console.log(Anderson);

// Para acceder a la información dentro del objeto se pueden usar dos métodos con ([]) o (.). Cuando se va a acceder a una función
// se le debe poner paréntesis al final del nombre

// console.log(Anderson["contacto"]);  // No tan usada
// console.log(Anderson.apellido);
// console.log(Anderson.pasatiempos[1]);
// console.log(Anderson.contacto.nick[0]);
// Anderson.saludar();
// Anderson.imprimir();

// Con el método .keys que es un objeto global se crea un arreglo iterable con todos las claves (keys) del objeto
varString = Object.keys(Anderson);
// console.log(varString); 

// Con el método .values que es un objeto global se crea un arreglo iterable con todos los valores (values) del objeto
varString = Object.values(Anderson);
// console.log(varString);

// Con este método puedo saber si un objeto tiene una propiedad
varBoolean = Anderson.hasOwnProperty("nombre");
// console.log(varBoolean);

varBoolean = Anderson.hasOwnProperty("date");
// console.log(varBoolean);

// *******************************************************************************

// CONDICIONALES

// IF, ELSE IF, ELSE
// El if es usado para tomar decisiones en el código. Si la condición es verdadera (true) se va a ejecutar lo que esté entre las 
// llaves (curly braces).

/* 
La estructura de un if es así:

if (condición) {
  código a ejecutar;
}
*/

function test (myCondition) {
  if (myCondition) {
    console.log("It was true");
  }
  console.log("It was false");
}

test(true);
test(false);
