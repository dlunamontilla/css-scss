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
        .filter((string) => string.length > 0)
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
        .join(",")
        .trim()
        .trim(",");
};

const input = document.querySelector("#input");
const resultados = document.querySelector("#resultados");

if (input && resultados) {
    input.oninput = function () {
        const strings = this.value
            .trim()
            .split(",")
            .filter((string) => string.trim().length > 0)
            .map((string) => string.trim());

        const texto = strings.map((string) => `"${string}"`).join(", ");

        resultados.innerHTML = `<pre>eliminarPatron(${texto})\n// ${eliminarPatron(
            ...strings
        )}</pre>`;

        if (!this.value.trim().length > 0) {
            resultados.textContent = "";
        }
    };
}
