import { generarTabla } from "../generarTabla.js";

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
                Resultado: "Ingresó una cadena vacía",
            },
        ];
    }

    // Depuramos el texto:
    let _texto = texto.replace(/[^a-záéíóúñ\s\n]/gi, "").trim();
    _texto = _texto.toLowerCase();

    const palabras = _texto.split(" ");
    const repetidos = {};

    palabras.forEach((palabra) => {
        if (palabra.trim().length > 0)
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

const input = document.querySelector("#input");
const tableContainer = document.querySelector("#table-container");

if (input && tableContainer) {
    input.oninput = function () {
        const texto = this.value.trim();
        const resultados = generarTabla(palabrasRepetidas(texto), {
            className: ["tabla"],
        });

        tableContainer.textContent = "";
        tableContainer.appendChild(resultados);
    };
}

export { palabrasRepetidas };
