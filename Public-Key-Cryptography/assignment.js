// What is a Bit? => A bit is the smallest unit of data in a computer and can have one of two values: 0 or 1. Think of a bit like a light switch that can be either off (0) or on (1).

const x = 1;
console.log(x); // 1

// What is a byte? => A byte is a group of 8 bits. It’s the standard unit of data used to represent a single character in memory. Since each bit can be either 0 or 1, a byte can have 2^8 (256) possible values, ranging from 0 to 255

const x1 = 202;
console.log(x1); // 202 

// Assignment: What is the 11001010 converted to a decimals ?

// Convert Binary -> Decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}
const binaryNumber = "11001010";
console.log("Decimal:", binaryToDecimal(binaryNumber)); // 202

// Convert Hexadecimal → Decimal

function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

const hexNumber = "1a";
console.log("Decimal:", hexToDecimal(hexNumber)); // 26

// Convert Octal → Decimal

function octalToDecimal(octal) {
  return parseInt(octal, 8);
}

const octalNumber = "17";
console.log("Decimal", octalToDecimal(octalNumber)); // 15

// Universal Function (Any Base → Decimal)

function convertToDecimal(number, base) {
  return parseInt(number, base);
}

console.log(convertToDecimal("1010", 2)); // Binary → 10
console.log(convertToDecimal("1a", 16));  // Hex → 26
console.log(convertToDecimal("17", 8));   // Octal → 15


// decimal to binary 
function decimalToBinary(decimal) {
  return decimal.toString(2);
}
const number = 10;
console.log("Binary", decimalToBinary(number)); // Binary 1010


// Manual Method (Without Built-in Function)

function decimalToBinary(num) {
  let binary = "";

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary || "0";  
}
console.log(decimalToBinary(202)); // 11001010

// Math.floor() is a built-in JavaScript function that: Rounds a number DOWN to the nearest whole integer

// console.log(Math.floor(4.9));   // 4
// console.log(Math.floor(4.1));   // 4
// console.log(Math.floor(-4.1));  // -5
// console.log(Math.floor(-4.1));  // -5


// UInt8Array => A better way to represent an array of bytes is to use a let bytes = new Uint8Array([0, 255, 127, 128]);
/*

Uint8Array is a Typed Array in JavaScript.
It stores: Unsigned 8-bit integers (0 → 255)
Meaning:
Minimum value → 0
Maximum value → 255
Only whole numbers
Each value takes exactly 1 byte (8 bits)

*/

let bytes = new Uint8Array([0, 255, 127, 128, 3030]);
console.log(bytes);
// 3030 => Since Uint8Array can only store values between: 0 - 255 
// JavaScript automatically converts it using: value % 256

// So 3030 % 256 = 214

console.log(new Uint8Array([256]));   // 0
console.log(new Uint8Array([257]));   // 1
console.log(new Uint8Array([-1]));    // 255
