/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
