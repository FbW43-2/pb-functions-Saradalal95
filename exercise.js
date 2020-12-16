"use strict";
// Multiply

// Write a function that accepts two numbers and validate that they are numbers.
// multibly = (number1, number2) => number1 * number2;

function Multiply(n1,n2) {
  return n1*n2;
}
/*arrow function*/
Multiply =(num1, num2) => num1 * num2;

function validate(var1,var2) {
  if ((typeof var1=== "number")&&(typeof var2==="number")){
    console.log("one or both are numbers");
  }
  else{console.log("one or both are not numbers")};
}
 validate( 3 , "sara");

// Exponent

function exponent(number1,number2) {
  var result=1;
  for (var i=1; i<=number2;i++){
     result *= number1;
  }
 return result;
}
console.log(exponent(2, 5));

// Add up 
function sumIntFrom1ToN(number) {
  console.log((number * (number + 1)) / 2);
}
sumIntFrom1ToN(4);
sumIntFrom1ToN(13);
sumIntFrom1ToN(600);

// Cubed
function sumOfCubes(n1, n2, n3) {
  var x =exponent(n1,3);
  var y =exponent(n2,3);
  var z =exponent(n3,3)
  var sum = (x+y+z);
  console.log(sum);
}
sumOfCubes(1,5,9);

// String Check
function isStrStartOfWord(inStr,word) {
for (let index = 0; index < inStr.length; index++) {
  if (inStr[index] === word[index]) {
    return "true";
  } else {
    return "false";
  }
}
}
console.log(isStrStartOfWord("ban", "banana"));
console.log(isStrStartOfWord("so", "banana"));

// Less Than or Equal to Zero?
function checkNumber(number) {
  if (number <=0) {
    return "true"
    
  }else {return "false"}
  
}
console.log(checkNumber(3));
console.log(checkNumber(-3));

// Count Occurrences
function occurrencesCounter(string,letter) {
  var stringLowerCase = string.toLowerCase();
  var counter = 0;
  for (let index = 0; index < string.length; index++) {
     if (stringLowerCase[index] === letter) {
       counter++;
     }
    
  }
  console.log(counter);
}
occurrencesCounter("can you can a can as a canner can can a can", "c");