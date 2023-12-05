function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
      || typeof startString !== 'string'
      || startString.length === 0
  ) {
    return '';
  }

  const myArray = [];
  // loop accross the set and get each row
  for (const row of set) {
    // check if each row starts with the startString
    if (row.startsWith(startString)) {
      myArray.push(row.slice(startString.length));
    }
  }
  return myArray.join('-');
}

export default cleanSet;
