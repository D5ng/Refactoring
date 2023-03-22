class Person {
  #lastName;
  #firstName;

  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    {
      return this.#firstName;
    }
  }
}

const defaultOwner = new Person({ firstName: "마틴", lastName: "파울러" });

// 복사본을 전달하기.
export function getDefaultOwner() {
  return defaultOwner;
}
