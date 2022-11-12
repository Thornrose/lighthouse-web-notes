// notes on objects & `this.` :

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

// { // notes on intro to Classes, also getter and setter
// class Pizza {

//   constructor(size, crust = "soft") {             // constructor sets up default state and can add optional (or probably necessary) params
//     this.toppings = ["cheese"];
//     this.crust = crust;
//     console.log(`Fresh pizza coming right up!`);
//   };
  
//   addTopping(topping) {       // metod - doesn't do anything right away, but defines a method action that can be used on a new instance
//     this.toppings.push(topping);
//   }

//   set size(size) {     // setter
//     if (size === "s" || size === "m" || size === "l") {
//       this._size = size;
//     // else we could throw error, return false, etc
//     // we choose here to ignore all other values
//     }
//   }

//   get price() {
//     const basePrice = 10;
//     const toppingPrice = 2;
//     return basePrice + (this.toppings.length * toppingPrice);
//   }

// }

// // let pizza1 = new Pizza("large", "stuffed");
// // console.log(pizza1.toppings);
// // console.log(pizza1.crust);
// // console.log(pizza1.size);
// // pizza1.addTopping("mushrooms");
// // pizza1.addTopping("peppers");
// // console.log(pizza1.toppings);

// // let pizza2 = new Pizza();

// const pizza3 = new Pizza();
// console.log(pizza3._size);
// pizza3.size = "m";        // setting
// console.log(pizza3._size);
// pizza3._size = "g";
// console.log(pizza3._size);
// pizza3.size = "l";
// console.log(pizza3._size);
// console.log(pizza3.price);         // getting


// }


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



// {
// {
// //function randomString() {
//   let r = (Math.random() + 1).toString(36).substring(7);
//   console.log('random', r);
// }

// //randomString();

// console.log((254).toString(16));
// console.log((2).toString(3));



// let randomString = Math.random().toString(36).replace('0.', '');
// console.log(randomString)
// let shortString = randomString.slice(0, 6);
// console.log(shortString);
// }


// { // depth-first traversal example
//   class Node {

//     constructor(data) {
//       this.data = data;
//       this.parent = null;
//       this.children = [];
//     }

//     depthFirstTraversal() {

//       console.log(this); // 1

//       for (const childNode of this.children) {
//         childNode.depthFirstTraversal(); // 2
//       }
//     }
//   }

// }

{exArr = [1,2,3,4,5,6,7,8,9];

// measuring runtime in elementary operations for worst-case (number not in array): altogether, 3n + 4, where n is # of elements in array
function search(array, number) {
  let index = null; // 1

  // for loop: 1; n+1; n
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) { // n
      index = i; // only happens if found - so doesn't count in worst case 
      break;
    }
  }

  return index; // 1
};

console.log(search(exArr, 7));


// binary search example (must be ordered/sorted array!!!), again doing the numbers for worst case: comes to 9log(n) + 3
function binarySearch(array, item) {
  let min = 0; // 1
  let max = array.length - 1; // 1

  while (true) { // log n
    const middleIndex = Math.floor((min + max)/2.0); // (not sure why there is the .0?) // 3 log n (3 operations here)
    const currentItem = array[middleIndex]; // log n

    if (currentItem === item) { // log n
      // found
      return middleIndex;

    } else if (currentItem < item) { // log n
      // look to the right
      min = middleIndex + 1;

    } else { // log n
      // look to the left
      max = middleIndex - 1
    }

    if (min > max) { // log n
      return null; // 1
    }
  }
}
}

// QUADRATIC example, different scenario: 3 + 5n + 4n^2
function arrayContainsSum(array, sum) {

  for (let i = 0; i < array.length; i++) { // 1, 1+n, n, n
    const element1 = array[i];

    for (let ii = 0; ii < array.length; ii++) { // n, n+n^2, n^2

      const element2 = array[ii]; // n^2

      if (element1 + element2 === sum) { // n^2
        return true;
      }
    }
  }
  return false; // 1
}

// LINEAR example: 4 + 7n
function binArrayContainsSum(array, sum) {
  let i = 0; // 1
  let ii = array.length - 1; // last index // 1

  while (i <= ii) { // n+1
    const element1 = array[i]; // n
    const element2 = array[ii]; // n
    const currentSum = element1 + element2; // n

    if (currentSum === sum) { // n
      return true;
    } else if (currentSum > sum ) { // n
      ii--; // reduce max // n
    } else {
      i++;  // increase min
    }
  }

  return false; // 1
}

