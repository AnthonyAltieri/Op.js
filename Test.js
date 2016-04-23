// Get the contructor for the Op.js file
var Op = require('./Op.js');

const op = new Op();

// Test object to demonstrate the uses of Op.js
function Person (name, age) {
    this._name = name;
    this._age = age;
}

// The Person less than function
function ltPerson (lhs, rhs) {
    return (lhs._age < rhs._age);
};

// The Person greater than function
function gtPerson (lhs, rhs) {
    return (lhs._age > rhs._age);
};

// The Person equal to function
function eqPerson (lhs, rhs) {
    return (lhs._age === rhs._age);
};

// The Person not equal to function
function neqPerson (lhs, rhs) {
    return (lhs._age != rhs._age);
};

// A helper method to build a string representing a Person object
Person.prototype.toString = function() {
    return 'Person{ name: ' + this._name + ', age: ' + this._age + '}';
};

// Set all of the Person operator functions in the Op object
op.setLT(ltPerson);
op.setGT(gtPerson);
op.setEQ(eqPerson);
op.setNEQ(neqPerson);

// Create sample Person objects
const p1 = new Person('Anthony Altieri', 21);
const p2 = new Person('John Doe', 40);
const p3 = new Person('Jane Doe', 21);


// Begin the demonstration by printing out the Person objects neatly
console.log('p1: ' + p1.toString());
console.log('p2: ' + p2.toString());
console.log('p3: ' + p3.toString());

// Now demonstrate the use of the Op object
console.log('p1 < p2: ' + op.lt(p1, p2));
console.log('p2 < p1: ' + op.lt(p2, p1));
console.log('p3 > p1: ' + op.gt(p3, p1));
console.log('p1 === p3: ' + op.eq(p1, p3));
console.log('p1 === p2: ' + op.eq(p1, p2));
console.log('p1 != p2: ' + op.neq(p1, p2));




