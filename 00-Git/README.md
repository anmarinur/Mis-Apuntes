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


## PÁRRAFOS

Para los párrafos se crea una nueva línea sin dejar espacios al inicio y siempre alineado a la izquierda. Cada párrafo se separa de una línea.

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

## LISTAS

Para listas ordenadas se ponen los números que necesariamente no tienen que estar en orden, pero si deben empezar por el número 1 y luego un punto:

    1. Primer ítem
    2. Segundo ítem
    3. Tercer ítem
        3.1 Un subítem
    4. Cuarto ítem

1. Primer ítem
2. Segundo ítem
3. Tercer ítem
    3.1 Un subítem
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

## IMÁGENES

Primero se añade un signo de admiración (!), después un texto alternativo entre llaves [] y luego entre paréntesis la ruta de la imagen:

    ![Dibujo de spiderman](/Images/spidey1.jpg "Spidey") 

![Dibujo de spiderman](/Images/spidey1.jpg "Spidey") 

## LINKS

Se ponen entre llaves angulares:

    <https://www.markdownguide.org/basic-syntax/>

<https://www.markdownguide.org/basic-syntax/>

O para agregar a un texto el link se usan llaves y el link entre paréntesis:

    [Sintaxis para markdown](https://www.markdownguide.org/basic-syntax/)

[Sintaxis para markdown](https://www.markdownguide.org/basic-syntax/)


