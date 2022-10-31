// // notes on objects & `this.` :
// const dog = {
//   teachMeSomething: function() {
//     if (dog === this) {
//       console.log("dog === this");
//     }
//     dog.speak();
//   },
//   breed: "shih tzu",
//   speak: function() {
//     console.log(dog.sound);
//   },
//   sound: "woof"
// };

// dog.teachMeSomething();

{ // notes on intro to Classes, also getter and setter
class Pizza {

  constructor(size, crust = "soft") {             // constructor sets up default state and can add optional (or probably necessary) params
    this.toppings = ["cheese"];
    this.crust = crust;
    console.log(`Fresh pizza coming right up!`);
  };
  
  addTopping(topping) {       // metod - doesn't do anything right away, but defines a method action that can be used on a new instance
    this.toppings.push(topping);
  }

  set size(size) {     // setter
    if (size === "s" || size === "m" || size === "l") {
      this._size = size;
    // else we could throw error, return false, etc
    // we choose here to ignore all other values
    }
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

}

// let pizza1 = new Pizza("large", "stuffed");
// console.log(pizza1.toppings);
// console.log(pizza1.crust);
// console.log(pizza1.size);
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings);

// let pizza2 = new Pizza();

const pizza3 = new Pizza();
console.log(pizza3._size);
pizza3.size = "m";        // setting
console.log(pizza3._size);
pizza3._size = "g";
console.log(pizza3._size);
pizza3.size = "l";
console.log(pizza3._size);
console.log(pizza3.price);         // getting


}


// { // notes on extending classes (inheritance)

//   // BASE level class definition:
//   class Person {
//     constructor(name, quirkyFact) {

//       this.name = name;
//       this.quirkyFact = quirkyFact;
//       this.age = 30;
//     }

//     bio() {
//       return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//     }
//   }

//   // classes that INHERIT from other class
//   class Student extends Person {

//     enroll(cohort) {
//       this.cohort = cohort;
//     }
//   }

//   class Mentor extends Person {

//     goOnShift() {
//       this.onShift = true;
//     }

//     goOffShift() {
//       this.onShift = false;
//     }

//     biog() {
//       return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
//     }
//   }



//   const student1 = new Student("Ames", "Buddy");
//   student1.enroll("Oct 17 Pod A East 2022");

//   console.log(student1);
//   console.log(new Mentor("Bob", "Cook").biog());
// }


{






}