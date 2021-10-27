# Palabras políndromas

Son palabras que aunque se volteen siguen diciendo lo mismo.

Se debe crear una función que reciba un `string` y devuelva si es o no una palabra políndroma.

Ejemplo:

```js
polindromo("Ala"); // Debe devolver true
polindromo("María"); // Debe devolver false
```

El código fuente es la siguiente:

```js
/**
 *
 * @param {string} texto
 * Debe ingresar solo una palabra
 *
 * @returns {boolean}
 * Devuelve «true» si es políndromo o «false» si no lo es.
 */
const polindromo = (texto) => {
    if (typeof texto !== "string") {
        throw new Error("Debe ingresar una cadena");
    }

    // Debe devolver false, porque las cadenas vacías
    // no son políndromos:
    if (!(texto.length > 1)) {
        console.warn("Recuerde que debe tener texto");
        return false;
    }

    // Depuración de texto:
    texto = texto.replace(/[^a-záéíóúñ\s\n]/gi, "");

    // Obtener solo una palabra:
    const [palabra] = texto.trim().split(" ");

    // Variable auxiliar:
    let invertir = "";

    for (let caracter of palabra) {
        invertir = caracter + invertir;
    }

    return invertir.toUpperCase() === palabra.toUpperCase();
};
```

La función devolverá siempre un valor `booleano`, es decir, `true` o `false`.
