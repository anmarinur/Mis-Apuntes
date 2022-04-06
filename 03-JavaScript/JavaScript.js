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

var varNull = null;
var varBoolean = true;
var varString = 'Anderson';
var varNumber = 45;
var varObject = {};

// DATOS TIPO SYMBOL

// Permiten obtener valores que no pueden volver a ser creados, es decir, son identificadores únicos
// Para crear un tipo Symbol se hace de la siguiente forma:

const varSymbol = Symbol('varSymbol');
// console.log(varSymbol);

// Incluso si creo otro symbol del mismo valor, no va a ser igual al anterior

const varSymbol2 = Symbol('varSymbol');

// varSymbol === varSymbol2 es false
// console.log(varSymbol === varSymbol2);

// --------------------------------------------------------------------------

// Una variable puede tomar los 8 tipos de datos. El nombre de una variable puede contener letras y números y ($) o (_), pero nunca puede empezar por un número

// Para asignar valores a una variable se usa (=)
// También se pueden asignar una variable a otra variable

varString = varNumber;

// Los nombres de las variables y las funciones son sensibles a las mayúsculas
// Por ejemplo myVar es diferente de myvar y diferente de MYVAR











