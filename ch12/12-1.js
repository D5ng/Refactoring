// 예시 1
class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name
  }
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

const salesPerson = new Salesperson("Dongs");
const engineer = new Engineer("DongHyun");

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}

class Employee extends Party {}
