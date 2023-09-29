/**
 * Represents a Holberton course
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse
   *
   * @param {String} name
   * @param {Number} length
   * @param {String[]} students
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of this course
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course (Months)
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (Months)
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the students of this course
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the name of the students
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

	
