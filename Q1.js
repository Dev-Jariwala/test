const sevenBoom = (arr) =>
  arr.join("").indexOf("7") >= 0 ? "Boom!" : "there is no 7 in the array";
console.log(sevenBoom([23, 6, 3]));
