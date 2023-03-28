class Order {
  #number;
  #customer;
  constructor(number, customer) {
    this.#number = number;
    this.#customer = customer
  }

  get customer() {
    return this.#customer;
  }
}

class Customer {
  #id;
  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}

class CustomerRepository {
  #customers
  constructor(){
    this.#customers = new Map();
  }

  get customers(){
    return this.#customers;
  }

  registerCustomer(id){
    if(!this.#customers.has(id)){
      this.#customers.set(id, new Customer(id))
    }

    return this.findCustomer(id);
  }

  findCustomer(id){
    return this.#customers.get(id);
  }
}

const customerRepository = new CustomerRepository();
const order1 = new Order(1, customerRepository.registerCustomer("Dongs"))
const order2 = new Order(2, customerRepository.registerCustomer("Suzy"));
const order3 = new Order(2, customerRepository.registerCustomer("Ina"));
const order4 = new Order(2, customerRepository.registerCustomer("MinJung"));