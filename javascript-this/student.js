/* exported student */
var student = {
  firstName: 'Sean',
  lastName: 'Hughes',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + student.subject + '.';
  }
};
