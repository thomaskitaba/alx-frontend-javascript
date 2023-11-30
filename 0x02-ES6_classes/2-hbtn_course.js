export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('lenght must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  //  getter
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setter
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be number');
    }
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('students must be array');
    }
    this._students = students;
  }
}
