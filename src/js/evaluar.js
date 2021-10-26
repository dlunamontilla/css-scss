/**
 *
 * @param {object} object
 * @returns {string}
 */
const evaluar = (object) => {
    return Object.prototype.toString.call(object);
};

/**
 *
 * @param {object} object
 * @returns {boolean}
 */
const isObject = (object) => {
    return evaluar(object) === "[object Object]";
};

export { isObject };
