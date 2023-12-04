function updateStudentGradeByCity(myStudents, city, newGrades) {
  const studFiltered = myStudents.filter((obj) => obj.location === city);
  // console.log(studFiltered);
  return studFiltered.map((obj) => {
    const grd = newGrades.find((greadObj) => greadObj.studentId === obj.id);
    if (grd) {
      obj.grade = grd.grade;
    } else {
      obj.grade = 'N/A';
    }
    return obj;
  });

}
export default updateStudentGradeByCity;
