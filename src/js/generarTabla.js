import { isObject } from "./evaluar.js";

/**
 *
 * @param {Array} datos
 * @param {object} options
 * @returns {HTMLElement}
 */
const generarTabla = (datos, options = {}) => {
    const { className = ["table"] } = options;

    if (!Array.isArray(datos))
        throw new Error("El parámetro ingresado no es un Array");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const colgroup = document.createElement("colgroup");
    const col = document.createElement("col");
    const tr = document.createElement("tr");

    datos.forEach((object, index) => {
        if (!isObject(object)) {
            throw new Error("Se esperaba un objeto");
        }

        if (index == 0) {
            const row = tr.cloneNode(false);

            for (let propiedad in object) {
                row.insertAdjacentHTML("beforeend", `<th>${propiedad}</th>`);
                colgroup.appendChild(col.cloneNode(false));
            }

            thead.appendChild(row);
        }

        const row = tr.cloneNode(false);
        tbody.appendChild(row);

        for (let propiedad in object) {
            let register = object[propiedad];
            register = isObject(register)
                ? generarTabla([register]).outerHTML
                : register;

            row.insertAdjacentHTML("beforeend", `<td>${register}</td>`);
        }
    });

    table.classList.add(...className);
    table.append(colgroup, thead, tbody);

    return table;
};

const resultados = generarTabla([
    { id: 1, valor: "David Luna" },
    { id: 2, valor: "Gipsemar García" },
    {
        id: 3,
        valor: "Ciencias de la computacion",
    },
]);

document.body.append(resultados);

export { generarTabla };
