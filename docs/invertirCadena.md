# Invertir Cadena

Para invertir una cadena se puede utilizar la siguiente función:

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

Sin embargo, alternativamente se puede hacer de la siguiente manera:

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

Para ambos casos su uso se puede utilizar escribiendo las siguientes líneas:

```js
const cadenaInvertida = invertirCadena("Cadena invertida");
console.log(cadenaInvertida);
```

Si quiere visualizar un ejemplo en vivo, puede [presionar este enlace][1]

[1]: https://dlunamontilla.github.io/educacion/practicas/01/invertir-cadena.html "Visualizar ejemplo en vivo"
