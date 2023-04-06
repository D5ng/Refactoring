class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return "Employee";
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  static createEmployee(name, type) {
    switch (type) {
      case "Engineer":
        return new Engineer(name);
      case "Manager":
        return new Manager(name);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type(){
    return 'Engineer'
  }
}

class Manager extends Employee {
  get type() {
    return "Manager";
  }
}

const ellie = new Engineer("엘리");
const bob = new Manager("밥");

const dongs = Employee.createEmployee('dongs', 'Engineer');
console.log(dongs.name);