/**
 *
 * @param {any} object
 * Permite ingresar cualquier cosa como parámetro para evaluar qué es.
 *
 * @returns {string}
 * Devuelve una cadena de texto entre corchetes con información
 * del tipo ingresado como parámetro.
 */
const evaluar = (object) => {
    return Object.prototype.toString.call(object);
};

/**
 *
 * @param {any} object
 * Se evalúa si el parámetro ingresado es un objeto.
 *
 * @returns {boolean}
 * Devuelve verdadero o falso.
 */
const isObject = (object) => {
    return evaluar(object) === "[object Object]";
};

export { isObject };
