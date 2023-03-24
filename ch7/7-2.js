export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [ ...this.#courses ];
  }

  set courses(courses) {
    this.#courses = courses;
  }

  addCourse(course){
    this.#courses.push(course);
  }

  removeCourse(course, callback){
    const idx = this.#courses.findIndex(c => c === course);
    if(idx === -1) {
      return callback('해당 코스는 없습니다.')
    }
    
    this.#courses.splice(idx, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");

const refactoringCourse = new Course("리팩토링", true);
const reactCourse = new Course("리액트", true);
const notCourseFn = (message) => console.log(message)

ellie.addCourse(refactoringCourse);
ellie.addCourse(reactCourse);

ellie.removeCourse("ㄹㄴㅇㄹㄴㅇ", notCourseFn);

console.log(ellie.courses.length);
