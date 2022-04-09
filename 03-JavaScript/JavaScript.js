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
var varUndefined;
//console.log(varUndefined);

// Si se realiza una operación con un valor undefined, voy a tener un resultado NaN (Not a Number)

//console.log(5 + varUndefined);

// Si se suma un undefined con un string, su resultado va a ser un string 'undefined'

//console.log('hola ' + varUndefined);

let varNull = null;
let varBoolean = true;
let varString = "Anderson";
let varNumber = 45;
let varObject = {};

// DATOS TIPO SYMBOL

// Permiten obtener valores que no pueden volver a ser creados, es decir, son identificadores únicos
// Para crear un tipo Symbol se hace de la siguiente forma:

let varSymbol = Symbol("varSymbol");
// console.log(varSymbol);

// Incluso si creo otro symbol del mismo valor, no va a ser igual al anterior

let varSymbol2 = Symbol("varSymbol");

// varSymbol === varSymbol2 es false
// console.log(varSymbol === varSymbol2);

// *******************************************************************

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

// *******************************************************************************

// STRINGS

// Se definen con las comillas dobles o sencillas, JS acepta cualquiera de las dos, siempre y cuando 
// se empiece y se termine con las misma:

'Hola' === "Hola"

// Toca decidir cual tipo de comillas usar cuando se van a trabajar con las dos en el mismo string

varString = `Soy un string ${i}`; // Investigar esta forma de definir un string

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








