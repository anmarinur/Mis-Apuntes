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
document.querySelector('.clase')  // Trae la primer clase que se encuentre
document.querySelector('#id')     // Trae el elemento con el id requerido
document.querySelector('body')    // Trae el elemento dentro del tag requerido
```         

Para traer todas las clases o los elementos con el mismo tag con el `querySelector`, se usa:

```js
document.querySelectorAll('.clase')  // Trae todos los elementos de la clase que se encuentre
document.querySelectorAll('title')   // Trae todos los elementos con el tag requerido
```         
