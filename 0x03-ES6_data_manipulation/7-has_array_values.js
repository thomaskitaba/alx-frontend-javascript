function hasValuesFromArray(mySet, value) {
  return value.every((obj) => mySet.has(obj));
}
export default hasValuesFromArray;
