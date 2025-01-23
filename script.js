'use strict';

const Person = function(firstName, birthYear) {
  // Instance properties (properties firstName and birthYear will be available on all the instances that are created through this constructor function)
  this.firstName = firstName;
  this.birthYear = birthYear;

  //  Never do this (each of constr.function object would carry around this function, terrible for performance. Prototypes and prototypal inheritance for solving this problem )
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
};

const levan = new Person('Levan', 1997);
console.log(levan);
// When we call a function with the new operator, 4 steps behind the scenes
// 1. New {} is created
// 2. function is called, this = {} (this keyword will point to new empty object created in 1st step)
// 3. this newly created object {} is linked to a prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(levan instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
}

levan.calcAge()
matilda.calcAge()

console.log(levan.__proto__);
console.log(Person.prototype === levan.__proto__);

console.log(Person.prototype.isPrototypeOf(levan));
console.log(Person.prototype.isPrototypeOf(matilda));

Person.prototype.species = 'Homo Sapiens'
console.log(levan.species);
console.log(levan.__proto__.species);
console.log(Object.getPrototypeOf(levan).species);

console.log(levan.hasOwnProperty('firstName'));
console.log(levan.hasOwnProperty('species'));