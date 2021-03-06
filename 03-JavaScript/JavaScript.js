// ? JAVASCRIPT

/* 

? GUÍA PARA LOS COMENTARIOS

* Instalar la extensión Better Comments para que los reconozca:

* Texto
! Notas importantes
? Subtítulos
TODO

*/

// TODO: Para nombrar los archivos como buena práctica se les nombra con el snake_case
// Ej: mi_archivo_javascript.js



// ? *******************************************************************************
// ? * VARIABLES Y TIPOS DE DATOS
// ? *******************************************************************************


// * Una variable puede tomar los 8 tipos de datos. 
// * El nombre de una variable puede contener letras, números y ($) o (_) 
// * Incluso comenzar por ellos a excepción de los números, nunca puede empezar por un número

// * Para asignar valores a una variable se usa (=)
// * También se pueden asignar una variable a otra variable

varString = varNumber;

// * Los nombres de las variables y las funciones son sensibles a las mayúsculas
// * Por ejemplo myVar es diferente de myvar y diferente de MYVAR
// * Como buena práctica se utiliza el camelCase que es en poner la primer letra de las palabras aparte de la primera en mayúscula

let esteEsElCamelCase;

// * Para las constantes se recomienda el UPPER_CASE:

const UNA_CONSTANTE = "Soy una constante";


// ? DIFERENCIA ENTRE VAR Y LET

// * Con var es muy fácil sobreescribir una declaración de variable:

var varNumber2 = 20;
var varNumber2 = 55;

/* 
* Cuando el código es pequeño, esto no representa un problema, pero entre más grande más son las probabilidades de que se sobrescriba por accidente. Para eso el ES6 (ECMAScript 6) introdujo la keyword let, así si se quiere sobreescribir, esto arrojaría error:
*/

let letNumber = 30;
// ! let letNumber = 20; --> esto arroja error

// * De esta forma con let la variable solo puede ser declarada una vez
// TODO: Se considera buena práctica usar let para crear variables

/* 
*  JavaScript tiene disponible 8 tipos de datos:

*  - undefined
*  - null
*  - boolean
*  - string
*  - symbol
*  - bigint
*  - number
*  - object 
*/

// * Si no se define inicialmente la variable, esta tiene un valor undefined 

let varUndefined;

// * Si se realiza una operación con un valor undefined, voy a tener un resultado NaN (Not a Number)
// * NaN también se obtiene cuando se realizan operaciones con otros datos diferentes a un número
// * Si se suma un undefined con un string, su resultado va a ser un string 'undefined'

let varNull = null; // * La diferencia con undefined es que el null es intencional
let varBoolean = true;
let varString = "Anderson";
let varNumber = 45;
let varObject = {};


// ? DATOS TIPO BOOLEAN

/* 
* Existen dos tipos true y false. Los distos tipos de datos tambien tienden al uno o al otro. Por ejemplo una variable con valor 0 o un string vacio son falsos mientras que una variable con cualquier valor o un string así sea con solo un espacio " " son positivos. En MDN están las listas de los objetos que tienen a ser positivos (Truthy) o negativos (Falsy) 
*/


// ? DATOS TIPO SYMBOL

// * Permiten obtener valores que no pueden volver a ser creados, es decir, son identificadores únicos
// * Para crear un tipo Symbol se hace de la siguiente forma:

let varSymbol = Symbol("varSymbol");

// * Incluso si creo otro symbol del mismo valor, no va a ser igual al anterior

let varSymbol2 = Symbol("varSymbol");

// * varSymbol === varSymbol2 es false


// ? DATOS TIPO NUMBER

varNumber = 3;


// ? SCOPE

// * El scope de una variable es la visibilidad que esta tiene en el código.

// * Por ejemplo las variables declaradas fuera de una función de bloque, tienen scope Global, es decir, se pueden en todo el programa. Las variables declaradas sin let o const tienen automáticamente scope global. Esto puede generar consecuencias inesperadas durante la ejecución del código. Por lo tanto siempre se debe crear una variable con let o const

// * Las variables declaradas dentro de una función tienen un scope local

function myTest() {
  const loc = "foo";
  console.log(loc);
}

// * myTest();
// ! console.log(loc); // Sale error porque loc está definida dentro de la función

// * Es posible tener dos variables una con scope local y otra con scope global, las dos con el mismo nombre. Esto debido a que la variable local tiene prioridad sobre la global

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

// * console.log(myFun()); // Va a imprimir "Head" ya que la variable local tiene prioridad sobre la global


// ? MÉTODOS QUE SE PUEDEN USAR CON NÚMEROS

// * Verifica si no es un número
// TODO: Number.isNaN(varNumber); 

// * Se usa para generar números aleatorios entre 0 y 1 sin incluir el 1
// TODO: Math.random();

// * Aproxima al valor entero más cercano
// TODO: Math.round(2.9);

// * Aproxima al número entero más cercano por debajo
// TODO: Math.floor(2.9);

// * Redondea al valor entero más cercano por encima
// TODO: Math.ceil(2.2);



// ? *******************************************************************************
// ? OPERADORES 
// ? *******************************************************************************


/*
* + Suma
* - Resta
* * Multiplicación
* / División
* % Módulo --> Devuelve el resto de una división
*/

let i = 0;

i = 5 + 2;
i = 5 - 2;
i = 5 * 2;
i = 5 / 2;
i = 5 % 2;
//console.log(i);

// * Es lo mismo

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


// ? OPERADORES RELACIONALES 

/* 
* <, >, <=, >=

* Comparan valores ya sea mayor, menor, mayor o igual, menor o igual
* De igual forma que (==) comparan valores así sean de distintos tipos de datos como: "3" < 5 lo que sería true
*/

// * (=)
// * Un igual es asignación de lo de la derecha a lo que está a la izquierda

// * (==)
// * Dos iguales es comparación de valores
// ! Usar 2 iguales se considera una mala práctica
// console.log(7 == 7);  // True
// console.log("7" == 7);  // True, aunque uno sea un string y el otro un número

// * (===)
// * Tres iguales es comparación de tipo de dato y valores
// TODO: Por buenas prácticas de programación, este tipo de comparación es la que se debe usar
// console.log(7 === 7);  // True
// console.log("7" === 7);  // False

// * (!=)
// * (!==)
// * Se comportan igual que == y === pero de opuestos


// ? OPERADORES LÓGICOS

/*
* (!) NOT
* (||) OR
* (&&) AND
*/



// ? *******************************************************************************
// ? STRINGS
// ? *******************************************************************************


// * Se definen con las comillas dobles o sencillas, JS acepta cualquiera de las dos, siempre y cuando se empiece y se termine con las misma:

'Hola' === "Hola"

// * Toca decidir cual tipo de comillas usar cuando se van a trabajar con las dos en el mismo string


// ? TEMPLATE STRINGS

// * Se usan cuando se requieren concatenar varios string contenidos en variables. Para esto se usa la tilde invertida (`) y las variables se ponen entre llaves (curly braces) precedidas por $

let nombre = "Anderson";
let apellido = "Marín"
varString = `Mi nombre es ${nombre} ${apellido}`;

// * Si se quiere poner (') o (") dentro del string se usa poniendo el backslash antes de las comillas

varString = "Soy un \"String\".";

// * El backslash (\) no solamente se usa para poner comillas dentro de otras comillas. También se usan con otros caracteres:

/*
*  \' single quote
*  \" double quote
*  \\ backslash
*  \n newline
*  \r carriage return
*  \t tab
*  \b word boundary
*  \f form feed
*/

// * Para concatenar dos strings se puse hacer con el operador (+)

varString = "Anderson" + " Marín";

// * También se puede usar el +=

varString += " Uribe";

// * También se pueden agregar variables a la concatenación con el (+)

let miNombre = "Anderson";
varString = "Mi nombre es " + miNombre; // * También permite trabajar con +=

// * Para acceder a una posición específica de un string, se puede usar la bracket notation []

varString = "";
varString = miNombre[0];

// * Los datos individuales de un string son inmutables, es decir, una vez creados no se pueden editar



// ? *******************************************************************************
// ? ARRAYS
// ? *******************************************************************************


// * Sirven para almacenar varios datos

varArray = ["uno", "dos", "tres", "cuatro"];

// * También se pueden almacenar arrays dentro de un array, se llaman multidimentional arrays

varArray = [["Uno", 1], ["dos", 2]];

// * Para acceder a los datos de un array se usa el sistema bracket notation y el primer dato está en la posición 0

varArray = ["uno", "dos", "tres", "cuatro"];
varArray[1];

// * A diferencia de los strings, en los arrays si se pueden modificar los datos incluso si se declaró como constante

const CONST_ARRAY = [25, 15, 30];
CONST_ARRAY[0] = 50;

// * Una forma para acceder a los datos de un multidimensional array es con el sistema de brackets

varArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

varArray[3]; // * Va a ser igual a [[10, 11, 12], 13, 14]
varArray[3][0]; // * Va a ser igual a [10, 11, 12]
varArray[3][0][1]; // * Va a ser igual a 11

// * Una forma de añadir elementos a un array es con la función .push() la cual añade el o los elementos al final del array y entrega el array resultante


// ? MÉTODOS QUE SE PUEDEN USAR CON LOS ARRAYS

// * Para ver el tamaño de un string
// TODO: .length;

// * Para agregar un valor al final del array
// TODO: .push();
// console.log(varArray);

// * Para eliminar el último valor del array. Retorna el valor eliminado y se puede guardar en una variable.
// TODO: .pop();

// * Para eliminar el primer valor del array
// TODO: .shift();

// * Para agregar un valor en la primer posición del array
// TODO: .unshift();

// * Permite crear un arreglo
// TODO: Array.of("a", "b", 1, 2);

// * Podemos llenar un array Array(# de posiciones).fill(valor a llenar)
// TODO: Array().fill();



// ? *******************************************************************************
// ? FUNCTIONS
// ? *******************************************************************************


// * Es código reutilizable:

function Saludo() {
  console.log("Hello");
}

// * Hay dos tipos, funciones declaradas y funciones expresadas:


// ? FUNCIÓN DECLARADA

function funcionDeclarada() {
  console.log("Soy una función declarada");
}

// ? FUNCIÓN EXPRESADA

// ! En este tipo de funciones si se invoca antes de ser expresada, JavaScript va a arrojar un error

let varFunction = function() {
  console.log("Soy una función expresada");
}

// * Todo el código dentro de las llaves se ejecuta cuando se invoca la función.
// * Para invocar la función se escribe el nombre de esta seguido de paréntesis:

// * Saludo();

// * También se puede crear una función que requiera algunos datos que se le deben dar al invocar la función. Estos dátos que pide la función se llaman parámetros y cuando se le dan los parámetros a la función cuando esta se invoca, se llaman argumentos

function testFun(param1, param2) {  
  console.log(param1, param2);
}

// * testFun("Hello", "World");

// * Si se llama la función sin definirle los parámetros, este los va a tomar como undefined. Para solucionar esto, se pueden definir valores por defecto, tan solo igualando en la función el parámetro al dato que queremos sea por defecto

function paramPreDefinidos(nombre = "Desconocido", apellido = "Desconocido") {
  console.log(`Mi nombre es ${nombre} ${apellido}`)
}

// * paramPreDefinidos();

// * Si se quiere devolver un valor desde la función se utiliza return

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

// ! NOTA: Se debe tener en cuenta que la función se ejecuta hasta el return, de ahí en adelante no lo tendría en cuenta

function otraFuncion() {
  console.log(10);
  console.log(20);
  return "Hasta aquí llega";
  console.log(40);  // ! Incluso se pone de un color más claro
}

// * otraFuncion();

// * Las funciones no necesariamente deben usar el return. Este solo se usa si se quiere retornar algún dato

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

// * También es posible asignar a una variable el valor retornado de una función

// * Tomando la función creada en líneas arriba plusThree(num);

varNumber = 0;
varNumber = plusThree(5);

// * La función (declarada) y la invocación de esta función pueden ir en cualquier posición ya que JavaScript lo que hace es organizar primero las variables y funciones. 

// * HolaMundo();

function HolaMundo() {
  console.log("Hola Mundo");
}


// ? *******************************************************************************
// ? OBJETOS
// ? *******************************************************************************


// * A diferencia de los array que contienen mucha información relacionada entre sí, los objetos contienen mucha información sobre una sola cosa. Se definen usando las llaves { }. Aquello que contienen los objetos son las propiedades y estas no tienen un índice como los arrays. La información que puede contener un objeto puede ser de cualquier tipo, incluso un objteto mismo. Cuando esta información es una función, ya no se llama atributo sino método:

const ObjetoNuevo = {};

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

// * Para acceder a la información dentro del objeto se pueden usar dos métodos con ([]) o (.). Cuando se está accediendo a una propiedad con el método de llaves, la propiedad debe ir entre comillas. Esta se usa también cuando el nombre de la propiedad tiene espacios. Cuando es una variable, se debe usar el método de llaves y no se ponen "". Cuando se va a acceder a una función se le debe poner paréntesis al final del nombre

// * Se pueden actualizar los valores de las variables que tiene un objeto, llamando a la propiedad con cualquier método (.) o ([]) y luego (=) y el nuevo valor

Anderson.apellido = ["Marín", "Uribe"];

// * También se pueden agregar nuevas propiedades utilizando cualquier método y poniendo el nombre de la nueva propiedad y el valor

Anderson.heroFan = "Spidey";

// * Para eliminar propiedades se pone delete y luego se llama a la propiedad que se quiera eliminar

delete Anderson.pasatiempos;


// ? OBJETOS LITERALES

nombre = "Dasha";
edad = 5;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function() {
    console.log("guau guau");
  }
}

// * Esto mismo se puede escribir de la siguiente forma. Cuando se quiere guardar un valor de una variable que tiene el mismo nombre de la propiedad, se escribe una sola vez y ya. Si se pone una propiedad que tiene un nombre diferente, ya se escribe normal.

const dog = {
  nombre,
  edad,
  ladrar() {  // * Este es la nueva forma para escribir los métodos
    console.log("guau guau");
  }
}


// ? MÉTODOS PARA LOS OBJETOS

// Con el método .keys que es un objeto global se crea un arreglo iterable con todos las claves (keys) del objeto
// TODO: varString = Object.keys(Anderson);

// Con el método .values que es un objeto global se crea un arreglo iterable con todos los valores (values) del objeto
// TODO: varString = Object.values(Anderson);

// Con este método puedo saber si un objeto tiene una propiedad
// TODO: varBoolean = Anderson.hasOwnProperty("nombre");



// ? *******************************************************************************
// ? CONDICIONALES
// ? *******************************************************************************


// ? IF, ELSE IF, ELSE

// * El if es usado para tomar decisiones en el código. Si la condición es verdadera (true) se va a ejecutar lo que esté entre las llaves (curly braces).

/* 
*  La estructura de un if es así:

  if (condición) {
    código a ejecutar;
  }
*/


// ? ELSE

// * Es usado para poder ejecutar una función cuando la condición del if es falsa

/* 
  if (condición) {
    código a ejecutar;
  } else {
    código a ejecutar;
  }
*/


// ? ELSE IF

// * Esta declaración se usa cuando se tienen múltiples combinaciones

/*
  if (condición 1) {
    código a ejecutar;
  } else if (condición 2) {
    código a ejecutar;
  } else if (condición 3) {
    código a ejecutar;
  } else {
    código a ejecutar
  }
*/


// ! NOTA: Cuando hay múltiples condiciones estas se evalúan de arriba hacia abajo. Por esto se debe ser muy cuidadoso a la hora de ubicar las condiciones, ya que se pueden tener resultados no esperados

// * Dentro de una función se puede poner el if como se ha hecho anteriormente, pero también se puede poner directamente en el return de función la comparación y este regresará un valor booleano dependiendo de la condición

// console.log(1 === 3);
// console.log(2 === 2);

/* 
  function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

  Quedaría así: 

  function isEqual(a, b) {
    return a === b;
  } 
*/



// ? *******************************************************************************
// ? SWITCH, CASE, BREAK
// ? *******************************************************************************


// * Switch se usa cuando se tienen múltiples opciones para elegir una dependiendo de una condición

/*
  switch(condición) {
    case 1:
      código a ejecutar;
      break;
    case 2:
      código a ejecutar;
      break;
  }
*/

// * Case evalúa con la igualdad estricta "===". El break le dice a JavaScript que detenga la ejecuión de las demás expresiones. Si se omite el break, entonces se ejecuta la siguiente declaración

// * No todas las veces se van a conocer todos los casos posibles, es por esto que se debe definir un valor para cuando no se ejecute ningún caso. Es muy parecido al else que se pone al final cuando se usan else if

/*
  switch(condición) {
    case 1:
      código a ejecutar;
      break;
    case 2:
      código a ejecutar;
      break;
    default:
      código a ejecutar;
      break;
  }
*/

// * Si no se definen algunos casos, el código se va a seguir ejecutando hasta que encuentre un break 

// * Cuando se tienen varios if/else if, estos se pueden reemplazar por switch con sus respectivos case

/* 
  if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }

  Quedaría así:

  switch(val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  } 
*/



// ? *******************************************************************************
// ? CICLOS
// ? *******************************************************************************


// * Con los ciclos se debe tener mucho cuidado, ya que si se plantea mal se pueden generar bucles infinitos


// ? WHILE (Ya no se usa mucho)

// * Evalúa la condición y luego ejecuta el código
// * Iteración: cada ciclo

/* 
  while(condición) {
    código a ejecutar;
    incremento o decremento de la variable;
  }
*/


// ? DO WHILE (Ya no se usa mucho)

// * Ejecuta el código y luego evalúa la condición

/*
  do {
    código a ejecutar;
    incremento o decremento de la variable;
  } while (condición)
*/

// ? FOR 

/*
  for (declaración de la variable; condición; incremento o decremento) {
    líneas de código a ejecutar
  }
*/

// * El incremento o decremeno no necesariamente tiene que ser i++ o i--. También puede ser i += 2, o i += 5, etc.

// * Este tipo de ciclos se usas para recorrer un arreglo

// * Despues de JS 6 hay dos tipos de for:

// ? FOR IN 

// * Es para hacer iteraciones con las propiedades de un objeto

/* 
for (variable in objeto) {
  código a ejecutar;
} 
*/

// ? FOR OF 
// * Es utilizado para hacer iteracioens sobre cualquier elemento iterable en JavaScript

/* 
for (variable of objeto-iterable) {
  código a ejecutar;
} 
*/



// ? *******************************************************************************
// ? MANEJO DE ERRORES
// ? *******************************************************************************

// * Método usado para evaluar una porción del código e identificar errores

/*
try{
  console.log("En try se pone el código a evaluar");
  noExiste; // Esta variable no existe y por lo tanto salta a catch. No saltan errores porque este código maneja el error
  console.log("Segundo mensaje de prueba"); // Esta línea no la lee porque el error estuvo antes y saltó al catch
  } catch (error){
    console.log("Catch captura cualquier error surgido o lanzado desde el try") // Como hubo un error entonces entró al catch
    console.log(error); // Se manda a imprimir el error para ver que falló
  } finally {  // Es más usado en back end
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch")
  }
*/


// ? *******************************************************************************
// ? BREAK - CONTINUE
// ? *******************************************************************************

// * Estos métodos solo se pueden usar en funciones de control como los if, for, etc. No se pueden usar en métodos para objetos. El break saca de la estructura en donde se encuentre. Va hasta la función padre y rompe el ciclo. Continue hace que se salte el código de la iteración en donde se llamó esta función

varString = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/*
for (let i = 0; i < varString.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(varString[i]);
}
*/

/*
for (let i = 0; i < varString.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(varString[i]);
}
*/



// ? *******************************************************************************
// ? DESTRUCTURACIÓN
// ? *******************************************************************************

// * Sin destructuración

const numeros = [1, 2, 3];

let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];

// * Con destructuración

const [one, two, three] = numeros;

// Otro ejemplo con objetos

let persona = {
  firstName: "Anderson",
  sureName: "Marín",
  age: 33
};

let{firstName, sureName, age} = persona;  // Las variables se deben llamar igual que la propiedad de la que voy a destructurar los valores



// ? *******************************************************************************
// ? PARÁMETROS REST Y OPERADOR SPREAD
// ? *******************************************************************************

// * Se usan mucho cuand se trabajan frameworks como react, angular, etc. Permiten agregar datos infinitos a una variable, función, etc.
// * Se crean poniendo tres puntos antes de la variable. Los valores que lleguen a esta variable son tomados como un arreglo

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function(n){
    resultado += n
  });
  return resultado;
}

// * El operador Spread permite añadir datos a un arreglo sin estar haciendo cada rato push u otros métodos

varString = [1, 2, 3, 4, 5];
let varString2 = [6, 7, 8, 9, 0];

let varString3 = [varString, varString2];

varString3 = [...varString, ...varString2];



// ? *******************************************************************************
// ? ARROW FUNCTIONS
// ? *******************************************************************************

// * Aplica para funciones expresadas o anónimas

const saludar = function() {
  console.log("hola");
}

saludar();