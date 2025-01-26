'use strict'

const Person = function (firstName, birthYear) {
  /* Instance properties (properties firstName and birthYear will be available on all the
  instances that are created through this constructor function) */
  this.firstName = firstName
  this.birthYear = birthYear

  /* Never do this (each of constr.function object would carry around this function, terrible for
  performance. Prototypes and prototypal inheritance for solving this problem ) */
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
}

const levan = new Person('Levan', 1997)
console.log(levan)
// When we call a function with the new operator, 4 steps behind the scenes
// 1. New {} is created
// 2. function is called, this = {} (this keyword will point to new empty object created in 1st step)
// 3. this newly created object {} is linked to a prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017)

console.log(levan instanceof Person)

Person.hey = function () {
  console.log('Hey there 👋')
  console.log(this)
}
Person.hey()

// Prototypes
console.log(Person.prototype)
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

levan.calcAge()
matilda.calcAge()

console.log(levan.__proto__)
console.log(Person.prototype === levan.__proto__)

console.log(Person.prototype.isPrototypeOf(levan))
console.log(Person.prototype.isPrototypeOf(matilda))

Person.prototype.species = 'Homo Sapiens'
console.log(levan.species)
console.log(levan.__proto__.species)
console.log(Object.getPrototypeOf(levan).species)

console.log(levan.hasOwnProperty('firstName'))
console.log(levan.hasOwnProperty('species'))

console.log(levan.__proto__)
// Object.prototype (top of prototype chain)
console.log(levan.__proto__.__proto__)
console.log(levan.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)
const arr = [3, 6, 6, 4, 5, 6, 9, 9, 3]
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__)

Array.prototype.unique = function () {
  return [...new Set(this)]
}

console.log(arr.unique())

const h1 = document.querySelector('h1')
console.dir(h1)
console.dir(x => x + 1)

// class expression
// const PersonCl = class {}

// class declaration
/*
class PersonCl {
  constructor (fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  // Instance Methods
  // Methods will be added to .prototype property
  calcAge () {
    console.log(2037 - this.birthYear)
  }

  greet () {
    console.log(`Hey ${this.fullName}`)
  }

  get age () {
    return 2037 - this.birthYear
  }

  // Set  property that already exists
  set fullName (name) {
    console.log(name)
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name!`)
  }

  get fullName () {
    return this._fullName
  }

//   Static method
  static hey () {
    console.log('Hey there 👋')
    console.log(this)
  }
}

const jessica = new PersonCl('Jessica Davis', 1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.age)
console.log(jessica.__proto__ === PersonCl.prototype)

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`)
// }
jessica.greet()

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter white', 1965)

PersonCl.hey()
 */

/*
const account = {
  owner: 'levan',
  movements: [200, 530, 120, 300],

  get latest () {
    return this.movements.slice(-1).pop()
  },

  set latest (mov) {
    this.movements.push(mov)
  }
}

console.log(account.latest)

account.latest = 50
console.log(account.movements)

const PersonProto = {
  calcAge () {
    console.log(2037 - this.birthYear)
  },

  init (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()

console.log(steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1979)
sarah.calcAge()

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear)
  this.course = course
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science')
console.log(mike)
mike.introduce()
mike.calcAge()

console.log(mike.__proto__)
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student)
console.log(mike instanceof Person)
console.log(mike instanceof Object)

Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)
*/

///////////////////////////////////////
// Inheritance Between 'Classes': ES6 Classes
/*
class PersonCl {
  constructor (fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  // Instance Methods
  // Methods will be added to .prototype property
  calcAge () {
    console.log(2037 - this.birthYear)
  }

  greet () {
    console.log(`Hey ${this.fullName}`)
  }

  get age () {
    return 2037 - this.birthYear
  }

  // Set  property that already exists
  set fullName (name) {
    console.log(name)
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name!`)
  }

  get fullName () {
    return this._fullName
  }

//   Static method
  static hey () {
    console.log('Hey there 👋')
    console.log(this)
  }
}

class StudentCl extends PersonCl {
  constructor (fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear)
    this.course = course
  }

  introduce () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`)
  }

  calcAge () {
    console.log(`I'm ${2037 -
    this.birthYear} years old, but as a student I feel more like ${2037 -
    this.birthYear + 10} `)
  }
}

const martha = new StudentCl('Martha Davis', 2012, 'Computer Science')
martha.introduce()
martha.calcAge()
 */

///////////////////////////////////////
// Inheritance Between 'Classes': Object.create

/*
const PersonProto = {
  calcAge () {
    console.log(2037 - this.birthYear)
  },

  init (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto)
StudentProto.init = function (firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course
}

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(StudentProto)
jay.init('Jay', 2010, 'Computer Science')
jay.introduce()
jay.calcAge()
 */

///////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1) Public fields (we can think of fields as property that will be on all the class instances(public instance field), but not on the prototype, these fields will not get inherited unlike methods that will be added to the prototype for instances to inherit them)
// 2) Private fields (allow us to implement encapsulation)
// 3) Public methods
// 4) Private methods
// STATIC version of these 4
class Account {
  // Public fields
  locale = navigator.language
  bank = 'Bankist'
  // Private fields
  #movements = []
  #pin

  constructor (owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    this.#pin = pin
    // this.movements = []
    // this.locale = navigator.language

    console.log(`Thanks for opening an account, ${owner}`)
  }

  // Public interface (API)
  getMovements () {
    return this.#movements
  }

  deposit (val) {
    this.#movements.push(val)
  }

  withdrawal (val) {
    this.deposit(-val)
  }

  // Internal method, needs to be accessible only for requestLoan, not outside of Account
  #approveLoan (val) {
    // Fake method
    return true
  }

  requestLoan (val) {
    if (this.#approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan approved`)
    }
  }

  // Static fields/methods are not accessible on the instance, not inherited from the prototype, accessible on the class itself
  static test () {
    console.log('TEST')
  }
}

const acc1 = new Account('Levan', 'EUR', 1111, [])
console.log(acc1)
// acc1.movements.push(250)
// acc1.movements.push(-140)
acc1.deposit(250)
acc1.withdrawal(140)
acc1.requestLoan(1000)

console.log(acc1)
console.log(acc1.pin)
// console.log(acc1.#movements)
console.log(acc1.getMovements())
// acc1.#approveLoan(323)
Account.test()