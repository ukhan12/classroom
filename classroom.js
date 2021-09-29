const students = [
  'Annecie aka Cici',
  'Charles'(charliecharles),
  'Elijah',
  'Noel',
  'Liam',
  'Jared',
  'Leo(Fullname: leonardo cedillo)',
  'Zo Manzoor' ,
  'Shevaughn',
  'Khalia Parris aka lia',
  'Jason aka Andres',
  'Myles Matthews',
  'Mark',
  'Uzma',
  'Jahsanni',
  'Jan Jan',
];

/**
 * Classroom class
 * 
 */
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
  
  // reset the array to an empty one
  reset() {
    this.students = [];
  }
}

module.exports = new Classroom();
