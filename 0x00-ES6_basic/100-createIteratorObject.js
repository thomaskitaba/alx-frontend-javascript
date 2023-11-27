export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const item of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...item,
    ];
  }
  return allEmployees;
}
