/**
 *
 * @param {string} cadena
 * @return {string}
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

const cadenaInvertida = invertirCadena("Cadena invertida");
console.log(cadenaInvertida);

const input = document.querySelector("#input");
const resultados = document.querySelector("#resultados");

if (input && resultados) {
    input.value = "";
    input.oninput = function () {
        resultados.textContent = invertirCadena(this.value);
    };
}

export {};
