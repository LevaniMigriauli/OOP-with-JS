///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
 */

/*
const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

bmw.accelerate()
bmw.accelerate()
bmw.brake()
bmw.accelerate()
mercedes.accelerate()
mercedes.brake()
 */

///////////////////////////////////////
// Coding Challenge #2
/*
class CarCl {
  constructor (make, speed) {
    this.make = make
    this.speed = speed
  }
  accelerate() {
    this.speed += 10
      console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  brake() {
    this.speed -= 5
      console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  get speedUS () {
    return this.speed / 1.6
  }

  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

const ford = new CarCl('Ford', 120)
console.log(ford.speedUS)
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 50
console.log(ford)
*/

///////////////////////////////////////
// Coding Challenge #3

/*
const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.make} is going at ${this.speed} km/h`)
}
*/

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

/*
const EV = function (make, speed, charge) {
  Car.call(this, make, speed) // Inherit Properties from Car
  this.charge = charge
}
EV.prototype = Object.create(Car.prototype) // Link prototypes
EV.prototype.constructor = EV
console.log(EV.prototype.constructor === EV)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}
EV.prototype.accelerate = function () {
  this.speed += 20
  this.charge --
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge} %`)
}

const tesla = new EV('Tesla', 120, 23)
console.log(tesla)
tesla.chargeBattery(50)
tesla.accelerate()
tesla.brake()
*/

///////////////////////////////////////
// Coding Challenge #4
// 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

class CarCl {
  constructor (make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate () {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }

  brake () {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
    return this
  }

  get speedUS () {
    return this.speed / 1.6
  }

  set speedUS (speed) {
    this.speed = speed * 1.6
  }
}

class EVCl extends CarCl {
  #charge

  constructor (make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }

  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo
    return this
  }
  accelerate = function () {
    this.speed += 20
    this.#charge--
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge} %`)
    return this
  }
}

const rivian = new EVCl('Rivian', 120, 23)
console.log(rivian)
rivian.accelerate().
  accelerate().
  accelerate().
  brake().
  chargeBattery(50).
  accelerate()

console.log(rivian.speedUS)