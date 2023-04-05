export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createEngineer(name){
    return new Employee(name, 'E')
  }

  static createSeniorEngineer(name){
    return new Employee(name, 'SE')
  }

  static createMarketer(name){
    return new Employee(name, 'M')
  }
}

const engineer = Employee.createEngineer('Dongs')
const seniorEngineer = Employee.createSeniorEngineer('D5ng')
const marketer = Employee.createMarketer('DongHyun')

console.log(engineer)
console.log(seniorEngineer);
console.log(marketer);