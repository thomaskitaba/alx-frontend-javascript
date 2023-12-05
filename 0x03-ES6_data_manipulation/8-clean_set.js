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
    if (row && startString.length < row.length) {
      let answer = 1;
      const stringArray = [];

      for (let i = 0; i < row.length; i += 1) {
        if (i < 3) {
          if (row[i] !== startString[i]) {
            answer = 0;
            break;
          }
        } else {
          stringArray.push(row[i]);
        }
      }

      if (answer === 1) {
        myArray.push(stringArray.join(''));
      }
    }
  }

  return myArray.join('-');
}

export default cleanSet;
