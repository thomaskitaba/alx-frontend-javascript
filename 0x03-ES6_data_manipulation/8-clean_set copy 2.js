function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
      || typeof startString !== 'string'
      || startString.length === 0
  ) {
    return '';
  }

  const myArray = [];

  for (const row of set) {
    if (startString.length < row.length) {
      let answer = 1;
      let count = 0;
      let stringArray = [];

      for (let i = 0; i < row.length; i += 1) {
        if (i < 3) {
          if (row[i] !== startString[i]) {
            answer = 0;
            break;
          }
        } else {
          count += 1;
          if (count === startString.length) {
            stringArray = row.slice(count);
            break;
          }

        }
      }

      if (answer === 1) {
        myArray.push(stringArray);
      }
    }
  }
  return myArray.join('-');
}
export default cleanSet;
