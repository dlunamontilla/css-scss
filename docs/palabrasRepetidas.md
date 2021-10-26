# Palabras repetidas

Conocer cuántas palabras se han repetido.

2-) Crea una función que devuelva el numero de veces que se repite una palabra en un string
Ejemplo: funcion(“hello world, new world”) debe devolver 2.

Crea una función que devuelve el número de veces que se repite una palabra en un `string`.

**Ejemplo:**

```js
palabrasRepetidas(“hello world, new world”);
```

**Debe devolver:**

```js
// 2
```

Sin embargo, se preparó la función para que devuelva en su lugar un _array_ de objetos con información de las veces que se han repetido las palabras en un texto de determinado.

Nuestro código ha quedado así:

```js
/**
 *
 * @param {string} texto
 * Ingrese un texto para determinar las veces en el
 * que se repiten sus palabras.
 *
 * @returns {Array<object>}
 * Debe devolver un array de objetos de las
 * palabras que se han repetido.
 */
const palabrasRepetidas = (texto) => {
    if (typeof texto !== "string") {
        throw new Error("Debe ingresar un texto");
    }

    if (!(texto.trim().length > 0)) {
        return [
            {
                Palabra: "Ingresó una cadena vacía",
            },
        ];
    }

    // Depuramos el texto:
    let _texto = texto.replace(/[^a-záéóúñ]/gi, "");
    _texto = _texto.toLowerCase();

    const palabras = _texto.split(" ");
    const repetidos = {};

    palabras.forEach((palabra) => {
        repetidos[palabra] = !(palabra in repetidos)
            ? 1
            : repetidos[palabra] + 1;
    });

    palabras.length = 0;

    for (let palabra in repetidos) {
        const cantidad = repetidos[palabra];

        palabras.push({
            Palabra: palabra,
            "Se ha repetido": cantidad === 1 ? "1 vez" : `${cantidad} veces`,
        });
    }

    return palabras;
};
```

La ventaja de un _array_ de objeto es que podemos generar dinámicamente tablas con información.

[Presiones aquí][1] para ver el ejemplo en vívo.

[1]: https://dlunamontilla.github.io/educacion/practicas/01/palabras-repetidas.html "Ver el ejemplo en vivo"
