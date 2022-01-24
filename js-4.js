//functions

// Write a function that reverse an integer number.
// You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321

// -12345
// -54321

// function reverseNumber(number) {
//   let pos = 1;
//   if (number < 0) {
//     pos = -1;
//     number *= -1;
//   }
//   const str = number.toString();
//   const result = [];
//   const arr = str.split("");
//   for (let i = arr.length - 1; i >= 0; i -= 1) {
//     result.push(arr[i]);
//   }
//   return Number(result.toString().replaceAll(",", "")) * pos;
// }
// console.log(reverseNumber(-98765));

//--------------------------------------

// // Write a function that converts the argument values.
// If it will be a string, convert it to number and vise versa.
// It should return an array of converted values.
// console.log(convert("1", 2, 3, "4"));
// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function convertArguments(...args) {
//   // const args = Array.from(arguments);
//   for (let i = 0; i < args.length; i += 1) {
//     if (typeof args[i] === "string") {
//       args[i] = Number(args[i]);
//     } else {
//       args[i] = String(args[i]);
//     }
//   }
//   return args;
// }

// console.log(convertArguments("1", 2, 3, "4"));

// function convertArguments(...args) {
//   const newArray = [];
//   for (let arg of args) {
//     if (typeof arg === "string") {
//       arg = Number(arg);
//       newArray.push(arg);
//     } else {
//       arg = String(arg);
//       newArray.push(arg);
//     }
//   }
//   return newArray;
// }

// console.log(convertArguments("1", 2, 3, "4"));

//-------------------------------------------
// Write a function that checks is array
// contains arg passed as a parameter value
// and return true in this case.

// // containsValue([2, 5, 8], 2)
// returns true //
// containsValue([12, 4, 6], 5)
// returns false
// function containsValue(array, value) {
//   for (const elem of array) {
//     if (elem === value) {
//       return true;
//     }
//     return false;
//   }
// }
// console.log(containsValue([2, 5, 8], 2));
// console.log(containsValue([12, 4, 6], 5));
//------------------------------------------
//Write a function which creates
// an array from the given range of numbers
// // makeListFromRange([2, 7])
// [2, 3, 4, 5, 6, 7] //
// makeListFromRange([8, 5])
// [5, 6, 7, 8]
