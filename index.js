// https://jsdoc.app

/** 
 * @constant
 * @type {number}
 */
const someGlobalConst = 1

/**
 * @global
 * @type {string}
 */
var someGlobalVar = "hello"

/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b
}

/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @example
 * // returns 3
 * add(1, 2)
 * @returns {number}
 */
const _add = (a, b) => a + b

/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
var triState = {
    /** The true value */
    TRUE: 1,
    FALSE: -1,

    /** @type {boolean} */
    MAYBE: true
};

/** Represents a cartesian point */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * @return {number} The x value.
     */
    getX() {
        // ...
    }

    /**
     * @return {number} The y value.
     */
    getY() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point}
     */
    static fromString(str) {
        // ...
    }
}

/**
 * Class representing a dot.
 * @extends Point
 */
class Dot extends Point {
    // ...
}

