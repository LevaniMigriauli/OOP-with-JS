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