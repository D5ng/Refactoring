class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  get type() {
    return this.#type;
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
      case "Personnel":
        return new Personnel(name);
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

class Personnel extends Employee {
  get type() {
    return "Personnel";
  }
}

const DongHyun = new Engineer("DongHyun");
const bob = new Manager("밥");
const Dongs = Employee.createEmployee("Dongs", "Personnel");

console.log(DongHyun.type)
console.log(bob.type);
console.log(Dongs.type);