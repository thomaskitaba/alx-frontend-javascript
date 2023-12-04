export default function getStudentIdsSum(myArray) {
  return myArray.reduce((acc, num) => acc + num.id, 0);
}
