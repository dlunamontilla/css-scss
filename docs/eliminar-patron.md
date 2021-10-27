# Eliminar cierto patrón

> **Importante:** no olvide leer los comentarios del código. Son útiles para comprender cómo funciona.

Crea una función que reciba un string y elimne de ese `string` cierto patrón de caracteres.

**Ejemplo:**

```js
funcion(“xyz1 “,”xyz2”,”xyz3”) // Debe devolver 1,2,3
```

## Caso 1

Si va a eliminar el patrón `xyz` el código sería el que sigue a continuación:

```js
/**
 *
 * @param  {...string} parametros
 * Todos los parámetros que vaya a ingresar deben ser
 * cadenas de caracteres.
 *
 * @returns {string}
 * La función devolverá una secuencia de caracteres con ciertos
 * patrones eliminados.
 */
const eliminarPatron = (...parametros) => {
    // Nuestra expresión regultar para indicar el patrón de caracteres
    // a eliminar:
    const expresion = /(xyz)/gi;

    return parametros
        .map((string) => {
            // Lanzamos un error si uno de sus parámetros no sea una cadena
            if (typeof string !== "string") {
                throw new Error(
                    "Recuerda que debes colocar como parámetros cadenas de texto"
                );
            }

            // Devolvemos un array con el patrón de caracteres eliminados:
            return string.replace(expresion, "");
        })
        .join(",");
};
```

El **operador de propagación** (..., en inglés como **spread operator**) se utiliza en el argumento `parámetros` para indicar de que se trata de una cantidad indetermina de parámetros de cadenas.

## Caso 2

Si la intención es devolver solamente números se utiliza las mismas líneas que en el caso anterior, pero, cambiando solamente nuestra expresión regular:

```js
/**
 *
 * @param  {...string} parametros
 * Todos los parámetros que vaya a ingresar deben ser
 * cadenas de caracteres.
 *
 * @returns {string}
 * La función devolverá una secuencia de caracteres con ciertos
 * patrones eliminados.
 */
const eliminarPatron = (...parametros) => {
    // Nuestra expresión regultar para indicar el patrón de caracteres
    // a eliminar:
    const expresion = /[^0-9]/g;

    return parametros
        .map((string) => {
            // Lanzamos un error si uno de sus parámetros no sea una cadena
            if (typeof string !== "string") {
                throw new Error(
                    "Recuerda que debes colocar como parámetros cadenas de texto"
                );
            }

            // Devolvemos un array con el patrón de caracteres eliminados:
            return string.replace(expresion, "");
        })
        .join(",");
};
```

Con la expresión `/[^0-9]/g` estamos indicando que se elimine cualquier cosa, menos los números. Es decir, con el símbolo circunflejo (`^`) dentro de los corchetes estamos indicando que se ignoren los números del **0 al 9 (`0-9` )** de todos los caracteres a eliminar.

---

[Presione aquí][1] para ver el ejemplo en vivo del primer caso.

[1]: https://dlunamontilla.github.io/educacion/practicas/01/eliminar-patron.html "Ver el ejemplo en vivo"
