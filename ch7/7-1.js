class Organization {
  #name
  #country

  constructor(name, country){
    this.#name = name;
    this.#country = country;
  }

  get name(){
    return this.#name;
  }

  get country(){
    return this.#country
  }

  set name(value){
    return this.#name = value
  }

  set country(value){
    return this.#country = value
  }
}

const organization = new Organization("Acme Gooseberries", "GB");

organization.name = "Dream Coding";

console.log(organization.name);
console.log(organization.country);
