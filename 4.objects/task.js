let StudentFirst = new Student("Вероника", "женский", 21);
let StudentSecond = new Student("Анна", "женский", 20);
let StudentThird = new Student("Максим", "мужской", 19);

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (typeof this.marks === false || this.marks === undefined) {
    return 0;
  }
  this.marks = [...this.marks, ...marksToAdd];
}

Student.prototype.getAverage = function () {
  if (typeof this.marks === false || this.marks === undefined) {
      return 0;
  }
  let result = this.marks.reduce((acc, item, index, arr) => {
  	acc += item;
  	if (index === arr.length - 1) {
  		return acc / arr.length
  	} return acc;
  }, 0);
  return result;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
