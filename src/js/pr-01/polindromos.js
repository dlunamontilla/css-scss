/**
 *
 * @param {string} cadena
 * Se ingresa una cadena base para cambiar el orden
 * de sus caracteres.
 *
 * @returns {string}
 * Devuelve una una cadena invertida.
 */
const invertirCadena = (cadena) => {
    if (typeof cadena !== "string") {
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

const input = document.querySelector("#input");
const resultados = document.querySelector("#resultados");

if (input && resultados) {
    input.oninput = function () {
        const cadena = this.value.trim();

        const _polindromo = polindromo(cadena);
        const esPolindromo = `${cadena} = ${invertirCadena(
            cadena
        )} <hr> <p>Es políndromo</p>`;
        const noEsPolindromo = `${cadena} != ${invertirCadena(
            cadena
        )}<hr><p>No es políndromo</p>`;

        resultados.innerHTML = _polindromo ? esPolindromo : noEsPolindromo;

        if (!(cadena.length > 1)) {
            resultados.textContent = "";
        }
    };

    // Bloquear teclas que no son parte de la palabra a evaluar.
    input.onkeydown = (e) => {
        const tecla = e.key;

        const expresion = /([a-záéíóúñ]|dead)/gi;
        if (!expresion.test(tecla)) {
            e.preventDefault();
        }
    };
}
export { polindromo };
