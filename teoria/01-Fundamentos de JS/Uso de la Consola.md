# Introducción
En este documento se pondrán las principales características que se pueden encontrar en la consola de cualquier navagador, pero principalemente de Google Chrome.

## Abrir la consola en un navagador
Para abrir la consola se deberá dar *CLICK DERECHO* y seleccionar la opción *INSPECCIONAR*. Se encontrará una pestaña llamada *CONSOLE*, la que seleccionaremos.

## Errores
Principalmente la consola servirá para encontrar errores en nuestro código de JS. Muestra que tipo de error es, además el nombre del archivo y la línea de donde se encuentra el error.

## Ejecutar código
También nos permitirá ejecutar código JS directamente en nuestro navegador. En la consola veremos el siguiente símbolo '>', en donde podemos introducir los siguientes ejemplos:

`> prompt('Cuál es tu nombre?');` // Respuesta < '20'

`> alert('Error');` // Respuesta < undefined`

`> confirm('Deseas borrar ese elemento?')` // Respuesta < booleano

## Limpiar la consola
Para limpiar la consola se ocupa la función: clear(), o en el símbolo de prohibído.

## Operaciones aritméticas
Como JS es un lenguaje de programación se pueden ejecutar operaciones aritmética, por ejemplo:

> 2 + 2

< 4

Si se trabaja con números se verán en azul en la consola.

## Ventana global
Esta nos devolverá todo lo que tiene nuestro documento HTML.
> document
< #document
    <!DOCTYPE html>
    ...
    </html>

# DOM
Seleccionar una parte del código HTML
`document.querySelector('<CSS>'); // Se pone un selector estilo CSS`
No es la única forma

## Escribir en la consola
- Para escribir en la consola se usará la siguiente función:
`console.log(2 + 2);` // Puede recibir cualquier cosa que se pueda escribir en la consola.

- Otra manera de mostrar datos en la consola, por ejemplo un arreglo y queremos que se vea ordenado, se usará la función:
`console.table([1, 2, 3]);` // Mostrará una tabla en la consola

- Para mostrar un error en la consola basta usar la siguiente función con un mensaje:
`console.error('Algo salió mal');` // Mostrará un mensaje en color rojo

- Para mostrar una advertencia se usará la función:
`console.warn('No puedes hacer esto');` // Mostrará un mensaje en amarillo

- Se puede medir el tiempo de ejecución de un segmento de código con la función:
~~~
console.time('<nombre_etiqueta>');
console.warn('Esta librería no es compatible');
console.warn('Esta librería no es compatible'); 
console.warn('Esta librería no es compatible'); 
console.warn('Esta librería no es compatible'); 
console.warn('Esta librería no es compatible'); 
console.timeEnd('<nombre_etiqueta>');
~~~

Estas funciones las podemos usar desde un archivo .js. No retornan ningun valor.


