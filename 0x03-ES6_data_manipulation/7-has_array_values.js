/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of a unique items.
 * @param {*} array - The array of items.
 * @author Kevin Njuguna <https://github.com/kevinnevs>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
