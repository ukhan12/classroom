const students = [
  'Charles',
  'Annecie',
  'Elijah',
  'Noel',
  'Liam',
  'Jared',
  'Zohaib',
  'Leo',
  'Shevaughn',
  'Myles',
  'Jason',
  'Khalia',
  'Mark',
  'Uzma',
  'Jahsanni',
  'Jan',
];

class Classroom {
  constructor() {
    this.resetStudents();

    this.studentsCalledUpon = [];
  }

  pickStudent() {
    if(this.students.length === 0) {
      this.resetStudents();
    }

    const index = Math.floor(Math.random() * this.students.length)

    const student = this.students[index]

    this.students.splice(index, 1)

    this.studentsCalledUpon.push(student)

    return student;
  }

  resetStudents() {
    this.students = [...students];
  }
}

module.exports = new Classroom();
