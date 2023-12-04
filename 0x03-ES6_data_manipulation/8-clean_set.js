function cleanSet(set, startString) {
  const myArray = [];
  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const row of set) {
    const stringArry = [];
    let answer = 1;
    if (startString.length <= row.length) {
      for (let i = 0; i < row.length; i += 1) {
        if (row[i] === startString[i] && i < 3) {
          answer = 1;
        }
        if (row[i] !== startString[i] && i < 3) {
          answer = 0;
          break;
        }
        if (i >= 3) {
          stringArry.push(row[i]);
        }
      }
    }
    if (answer === 1) {
      myArray.push(stringArry.join(''));
    }
  }
  return myArray.join('-');
}
export default cleanSet;
