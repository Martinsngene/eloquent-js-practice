// const getInputValue = () => {
//   const element = document.getElementById("inputValue");
//   element.addEventListener("change", (e) => {
//     let nameInput = e.target.value;
//     console.log(nameInput);
//     if (!nameInput) {
//       document.write("Please Enter a valid length of characters");
//     } else {
//       let div = document.getElementById("App");
//       div = document.write(`Your entry of ${nameInput} is valid`);
//       element.innerText.value = "";
//     }
//   });
// };

// Write a loop that makes seven calls to console.log to output the following triangle:

// Solution 1
// // a loop
// for (let i = 1; i <= 7; i++) {
//   // makes seven calls to console.log
//   switch (i) {
//     case 1:
//       // prints a # triangle
//       console.log("#");
//       break;

//     case 2:
//       console.log("##");
//       break;

//     case 3:
//       console.log("###");
//       break;

//     case 4:
//       console.log("####");
//       break;

//     case 5:
//       console.log("#####");
//       break;

//     case 6:
//       console.log("######");
//       break;

//     case 7:
//       console.log("#######");
//       break;
//   }
// }

// Solution 2

// let hash = "#";
// for (let i = 0; i <= 6; i++) {
//   hash = hash + "#";
//   console.log(hash);
// }

// Solution 3(most appropriate)

// let i, j;
// for (i = 0; i <= 6; i++) {
//   for (j = 0; j <= i; j++) {
//     document.write("#");
//   }
//   document.write("<br/>");
// }

// Write a program that uses console.log to print all the numbers from 1 to 100
//  For numbers divisible by 3, print "Fizz" instead
// For numbers divisible by 5 (and not 3), print "Buzz" instead
/*When you have that working, modify your program to print "FizzBuzz
" for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those)*/

// Solutions
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     document.write(`${i} FizzBuzz`);
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     document.write(`${i} Fizz`);
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     document.write(`${i} Buzz`);
//   } else {
//     document.write(`${i}`);
//   }
// }

/*
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a "#" character. The characters should form a
chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size,
outputting a grid of the given width and height.

*/

// Solution(For step 1)

// for (let i = 0; i <= 7; i++) {
//   if (i % 2 !== 0) {
//     console.log("# # # #");
//   } else {
//     console.log(" # # # # ");
//   }
//   console.log("\n");
// }

//Complete Solution( source: StackOverflow)
// let size = 3;
// let board = "";
// for (let y = 0; y < size; y++) {
//   /* why 2 loops? */
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) /* why is this? */ board += " ";
//     else board += "#";
//   }
//   board += "\n";
// }
// console.log(board);
