function cleanSet(set, startString) {
  const myArray = [];

  for (const row of set) {
    // console.log(row);
    const stringArry = [];
    let answer = 1;
    if (startString.length < row.length) {
      for (let i = 0; i < row.length; i += 1) {
      // console.log(row[i]);
        if (row[i] === startString[i] && i < 3) {
          answer = 1;
          // console.log(row[i]);
          continue;
        }
        if (row[i] !== startString[i] && i < 3) {
          answer = 0;
          break;
        }

        if (i >= 3) {
        // start appending
        // console.log(row[i]);
          stringArry.push(row[i]);
        }
      }
    }
    if (answer === 1) {
      // console.log(stringArry);
      myArray.push(stringArry.join(''));
    }
  }

  return myArray.join('-');
}
export default cleanSet;
