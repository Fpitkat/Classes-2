class Pet {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    const { name } = this
    return `${name} is eating!`
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age) // the super class will borrow from the pet constructor
    this.livesLeft = livesLeft
  }
  meow() {
    const { name } = this
    return `${name} says MEOWWWW!`
  }
}

class Dog extends Pet {
  bark() {
    const { name } = this
    return `${name} says RUFF!`
  }
}

const stella = new Cat('Stella', 5)
console.log(stella)
const fergie = new Dog('Fergie', 18)
console.log(fergie)
