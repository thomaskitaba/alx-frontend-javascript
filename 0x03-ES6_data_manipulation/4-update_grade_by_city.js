function updateStudentGradeByCity(myStudents, city, newGrades) {
  const studFiltered = myStudents.filter((obj) => obj.location === city);
  return studFiltered.map((obj) => {
    const tempObj = obj;
    const grd = newGrades.find((greadObj) => greadObj.studentId === obj.id);
    if (grd) {
      tempObj.grade = grd.grade;
    } else {
      tempObj.grade = 'N/A';
    }
    return obj;
  });
}
export default updateStudentGradeByCity;
