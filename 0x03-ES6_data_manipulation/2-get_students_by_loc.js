function getStudentsByLocation(myArray, city) {
  return myArray.filter((obj) => obj.location === city);
}
export default getStudentsByLocation;
