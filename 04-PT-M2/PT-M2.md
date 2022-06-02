# DOM

## Selectores para el document

Para traer todos los elementos de la clase requerida

```js
document.getElementsByClassName('Nombre-de-la-clase')
```

Para traer el elmento del id requerido 

```js
document.getElementById('Nombre-del-id')   
```

Para traer clases, o Id o tags se puede usar el `querySelector`. La diferencia es que este trae el primer elemento que encuentre.

```js
document.querySelector(".clase")  // Trae la primer clase que se encuentre
document.querySelector("#id")     // Trae el elemento con el id requerido
document.querySelector("body")    // Trae el elemento dentro del tag requerido
```

Para traer todas las clases o los elementos con el mismo tag con el `querySelector`, se usa:

```js
document.querySelectorAll(".clase")  // Trae todos los elementos de la clase que se encuentre
document.querySelectorAll("title")   // Trae todos los elementos con el tag requerido
```

Para crear nuevos elementos se usa:

```js
const newDiv = document.createElement("p");   // Se crea una variable y allí se guarda el nuevo elemento
newDiv.innerText = "Soy un párrafo";          // Le agrego un texto al párrafo
let div = document.querySelector("div")       // Guardo el div en una variable
div.append(newDiv);
```

Para decirle a un elemento que observe si ocurre algún evento se usa `target.addEventListener(evento, reacción)`

```js
newDiv.addEventListener('click', (e)=> console.log(e));
```

El evento no solo hace referencia al click, sino que también contiene mucha información. Entre esa el `target` que es el elemento que se estaba observando. Para acceder a ese target, como es un valor del objeto `event` entonces se usa `event.target`. Y así sucesivamente con demás elementos dentro de cada uno, por ejemplo style: `event.target.style.background = 'green';`

```js
newDiv.addEventListener('click', function (event) {
  console.log(event);
  event.target.style.background = 'green';  // Cada vez que se de click en newDiv, este va a cambiar a color verde.
});
```
