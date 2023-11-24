// Functions

// 1. Function Decleration ..

function myFunc(a, b, c) {
  return a + b + c;
}

// 2. Function Expression

const myFunc2 = function (a, b, c) {
  return a + b + c;
};

// 3. First Class Function

const myFunc3 = function (fn) {
  return "sum is " + fn(1, 2, 3);
};
console.log(myFunc3(myFunc));

// What is IIFE? Imidiately Invoked Function

(function myFunc4(num) {
  console.log(num * num);
})(5);

// Question related to IIFE Interviewer can ask about..

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Understandin Functions scope

var num1 = 10;
var num2 = 20;
var num3 = 30;

function multiply() {
  console.log(num1 * num2);
}
multiply();

function getScore() {
  var num1 = 1;
  var num2 = 2;

  function add() {
    console.log(num1 + num2);
  }
  add();
}
getScore();

// Function scope output based question that can be asked

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
