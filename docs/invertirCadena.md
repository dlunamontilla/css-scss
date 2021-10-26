# Invertir Cadena

Crea una función que inverta un `string` que recibe como parámetro.

**Ejemplo:**

```js
funcion("hello world");
```

**Debe devolver:**

```js
// dlrow olleh
```

## Solución

Se puede realizar de la siguiente manera:

```js
/**
 *
 * @param {string} cadena
 * @return {string}
 */
const invertirCadena = (cadena) => {
    if (typeof cadena !== "string" || !(cadena.trim().length > 0)) {
        throw new Error(
            "Debe ingresar una cadena y asegurarse que contenga caracteres"
        );
    }

    let cadenaInvertida = "";
    for (let caracter of cadena) {
        cadenaInvertida = caracter + cadenaInvertida;
    }

    return cadenaInvertida;
};
```

Sin embargo, alternativamente se puede hacer de esta otra forma

```js
/**
 *
 * @param {string} cadena
 * @return {string}
 */
const invertirCadena = (cadena) => {
    if (typeof cadena !== "string" || !(cadena.trim().length > 0)) {
        throw new Error(
            "Debe ingresar una cadena y asegurarse que contenga caracteres"
        );
    }

    return cadena.split("").reverse().join("");
};
```

Para ambos casos, la función se puede utilizar escribiendo las siguientes líneas:

```js
const cadenaInvertida = invertirCadena("Cadena invertida");
console.log(cadenaInvertida);
```

Si quiere visualizar un ejemplo en vivo, puede <a href="https://dlunamontilla.github.io/educacion/practicas/01/invertir-cadena.html" target="_blank" title="Visualizar ejemplo en vivo">presionar este enlace.</a>
