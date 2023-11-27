export default function createIteratorObject(report) {
  let allEmp = [];
  for (const item of Object.values(report.allEmp)) {
    allEmp = [
      ...allEmp,
      ...item,
    ];
  }
  return allEmp;
}
