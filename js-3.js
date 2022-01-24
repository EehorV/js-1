// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// Result: ["a", "b", "c", 0, 1, 2, 3];

// const bPart = b.splice(1);
// console.log(bPart);
// console.log(b);
// const result = a.concat(c, b, bPart[0]);
// console.log(result);

// let result = a.slice();
// result.push(c);
// result.push(b[0]);
// result = result.concat(b[1]);
// console.log(result);

// --------------------------------------------
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];
// const result = a.splice(3, 3, a[0], a[1], a[2]);
// console.log(a);

// copyWithin
// const result = a.copyWithin(3, 0, 3);
// console.log(result);

// ----------------------------------------------
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// const result = a.splice(5, 3, 0, 0, 0);
// console.log(a);

// fill
// const result = a.fill(0, 5, 8);
// console.log(a);
// ----------------------------------------------

// const a = [1, 2, [3, 4], [5, 6], 7];

// Result: [1, 2, 3, 4, 5, 6, 7]

// let result = [];
// for (const i of a) {
//   if (Array.isArray(i)) {
//     result.push(i[0], i[1]);
//   } else {
//     result.push(i);
//   }
// }
// console.log(result);

//flat
// const result = a.flat();
// console.log(result);

//-----------------------------------------------
// const a = ["a", "k", "n", "h", "n", "n", "k"];

// get the last index of 'n';
// let item;
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] === "n") {
//     item = i;
//   }
// }

// console.log(item);

//lastIndexOf

// const result = a.lastIndexOf("n");
// const result = a.length - a.reverse().indexOf("n") - 1;

// ---------------------------------------

// const a = [1, 2, 3, 4, 5, 6, 7];
// Result: [7, 6, 5, 4, 3, 2, 1]
// let b = [];
// for (let i = a.length - 1; i >= 0; i -= 1) {
//   b.push(a[i]);
// }

// console.log(b);
// a.reverse();
// console.log(a);

//-----------------------------------------
// const a = "alona";
// Result: ['a', 'l', 'o', 'n', 'a']
// const result = a.split("");
// console.log(result);
//arrayfrom

// console.log(Array.from(a));

//--------------------------
// const a = ["a", "l", "o", "n", "a"];
// console.log(a.join(""));
// console.log(a.toString(""));
