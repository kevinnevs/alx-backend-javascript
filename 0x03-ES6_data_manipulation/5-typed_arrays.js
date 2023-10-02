/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - The length of a buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored in the position.
 * @author Kevin Njuguna <https://github.com/kevinnevs>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
