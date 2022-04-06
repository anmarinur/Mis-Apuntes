# SINTAXIS PARA MARKDOWN (MD)

## HEADINDS

Se basa en signos (#) que varían el nivel del título dependiendo de la cantidad de estos signos. Se debe dejar un espacio entre el signo y el texto. Se debe dejar una línea antes y depués del título.

    # Heading Nivel 1
    ## Heading Nivel 2
    ### Heading Nivel 3
    #### Heading Nivel 4
    ##### Heading Nivel 5
    ###### Heading Nivel 6

Ej: El Heading Nivel 1 de este archivo es el título que dice SINTAXIS PARA MARKDOWN (MD)

<br>

## PÁRRAFOS

Para los párrafos se crea una nueva línea sin dejar espacios al inicio y siempre alineado a la izquierda. Cada párrafo se separa de una línea.

<br>

## ÉNFASIS EN UN TEXTO

### BOLD

**Bold** o __Bold__

Para poner en negrilla una palabra de en medio es mejor usar asteriscos

### ITALIC

*Italic* o _Italic_

Para poner itálica a una palabra de en medio se usan los asteriscos

### BOLD E ITALIC

***Bold e italic*** o ___Bold e italic___

Para poner negriella e itálica a una palabra de en medio se usan los asteriscos

<br>

## BLOCKQUOTES

Para agregarlos se usa > antes del texto. Para poner una línea de espacio cuando son varias se pone > y se deja en blanco

    > Soy un blockquote
    >
    > Otro blockquote

Y queda así:

> Soy un blockquote
>
> Otro blockquote

Si se quiere poner un blockquote dentro de otro, se usa >>

    > Soy un blockquote
    >
    >> Otro blockquote 

Y queda así:

> Soy un blockquote
>
>> Otro blockquote 

También permite poner otros elementos dentro de los blockquotes:

    > ## Soy un título dentro de un blockquote
    >
    > - Un ítem
    > - Otro ítem
    >
    > Soy un **párrafo**

Y queda así:

> ## Soy un título dentro de un blockquote
>
> - Un ítem
> - Otro ítem
>
> *Soy* un **párrafo**

**Se debe dejar una línea de espacio antes y después del blockquote**

<br>

## LISTAS

Para listas ordenadas se ponen los números que necesariamente no tienen que estar en orden, pero si deben empezar por el número 1 y luego un punto:

    1. Primer ítem
    2. Segundo ítem
    3. Tercer ítem
    4. Cuarto ítem

1. Primer ítem
2. Segundo ítem
3. Tercer ítem
4. Cuarto ítem

Para listas desordenadas se pueden usar símbolos como - + * 

    - Primer ítem
    - Segundo ítem
    - Tercer ítem
        - Un subítem
    - Cuarto ítem

- Primer ítem
- Segundo ítem
- Tercer ítem
    - Un subítem
- Cuarto ítem

> No se deben mezclar los símbolos. Se usa en todos el mismo.

<br>

## IMÁGENES

Primero se añade un signo de admiración (!), después un texto alternativo entre llaves [] y luego entre paréntesis la ruta de la imagen:

    ![Dibujo de spiderman](/Images/spidey1.jpg "Spidey") 

![Dibujo de spiderman](/Images/spidey1.jpg "Spidey") 

<br>

## LINKS

Se ponen entre llaves angulares:

    <https://www.markdownguide.org/basic-syntax/>

<https://www.markdownguide.org/basic-syntax/>

O para agregar a un texto el link se usan llaves y el link entre paréntesis:

    [Sintaxis para markdown](https://www.markdownguide.org/basic-syntax/)

[Sintaxis para markdown](https://www.markdownguide.org/basic-syntax/)

<br>
<br>

# TERMINAL

- **ls**: (`list`) Nos permite ver el contenido de la carpeta en la que nos encontramos
- **cd**: (`change directory`) Nos permite movernos a una nueva carpeta o directorio
: `cd NombreCarpeta`
- **cd ..**: regresa un nivel de la actual carpeta
- **cd ~**: *La virgulilla se saca en ubuntu ALT GR + 4(El que está encima de las letras con el signo $)*. Nos regresa a la carpeta raiz
- **mkdir**: (`make directory`) Nos permite crear una nueva carpeta dentro del directorio en donde nos encontramos: `mkdir NombreCarpetaNueva`
- **touch**: nos permite crear nuevos archivos dentro del directorio en donde nos econtremos. Para esto se agrega el nombre que queremos que tenga y la extensión: `touch NombreArchivo.extension`
- **rm**: nos permite eliminar cualquier archivo. No funciona con carpetas. Este archivo se elimina ***PERMANENTEMENTE*** y no queda en la papelera.
- **pwd**: nos indica en qué carpeta nos encontramos

> NOTA: cuando se está escribiendo el nombre de un archivo, se puede escribir la primer letra de ese nombre o las dos primeras y luego se oprime la tecla TAB para que complete, así se ahorra tiempo.

<br>
<br>

# GIT-HUB

- **git status**: muestra el estado de los archivos
- **git add . o git add nombre-del-archivo**: con el punto actualiza todos los archivos modificados o agregados y si no se pone el punto entonces se debe poner el nombre del archivo. De esta forma Git ya sabe que hay algunas modificaciones aunque estas solo están de forma local. Aquellos que estaban como unstage (no rastreado) a staged.
- **git commit -m ‘#’**: en done # puede tomar cualquier texto que represente el cambio o la actualización realizada. Aquellos archivos untracked (sin seguimiento) pasan a tracked. Y los archivos modificados quedan con un nombre con la versión actual.
- **git push**: para subir el archivo a github
- **git clone direccion-url-repositorio**: para clonar un repositorio que se encuentre en GIT

> Para actualizar el token en una carpeta nueva en la que se clonó un repositorio, se debe ir a ese directorio primero usando `cd` y luego se usa el siguiente código reemplazando con la información correspondiente:
>
>> `git remote set-url origin https://username:token@github.com/username/repository.git`

## TIPOS DE ESTADOS DE UN ARCHIVO EN GIT

- **Tracked**: son archivos que ya están en GIT, no tienen cambios pendientes y ya se han guardado sus últimas actualizaciones en el repositorio gracias a git add y git commit
- **Staged**: son archivos que ya están en GIT gracias a git add, pero no tienen sus últimas actualizaciones. GIT ya sabe de la existencia de modificaciones pero no se han actualizado en el repositorio por lo que necesita de git commit.
- **Unstaged**: son archivos tracked pero unstaged. No han sido afectados por el comando git add y menos por el comando git commit. Sus últimas versiones se encuentran guardadas localmente.
- **Untracked**: son archivos que solo existen de forma local. GIT no sabe de su existencia.




