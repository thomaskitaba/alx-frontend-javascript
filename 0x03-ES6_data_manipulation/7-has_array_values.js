function hasValuesFromArray(mySet, value) {
//   return value.every((obj) => mySet.has(obj));
let ans = 1;
for (const row in value) {
    if (!mySet.has(row)){
        ans = 0;
        break;
    }
    else {
        ans = 1;
    }
}
if (ans === 1) {
    return true;
} else {
    return false;
}
}
export default hasValuesFromArray;
