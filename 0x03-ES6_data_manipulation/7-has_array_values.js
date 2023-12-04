function hasValuesFromArray(mySet, value) {
//   return value.every((obj) => mySet.has(obj));
  let ans = 1;
  for (const row of value) {
    if (mySet.has(row)) {
      ans = 1;
    } else {
      ans = 0;
      break;
    }
  }
  if (ans === 1) {
    return true;
  }
  return false;
}
export default hasValuesFromArray;
