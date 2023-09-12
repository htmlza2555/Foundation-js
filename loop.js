// function Normalloop() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }
// Normalloop();

// function Reverseloop() {
//   for (let i = 3; i >= 0; i--) {
//     console.log(i);
//   }
// }
// Reverseloop();

// function Arrayloop() {
//   const Itembox = ["a", "bb", "ccc", "dddd"];
//   for (let i = 0; i < Itembox.length; i++) {
//     console.log(Itembox[i]);
//   }

//   //*Reverse Loop Through Array
//   for (let i = Itembox.length - 1; i >= 0; i--) {
//     console.log(Itembox[i]);
//   }

//   //break Keyword
//   for (let i = 0; i < Itembox.length; i++) {
//     if (Itembox[i] === "bb") {
//       break;
//     }
//     console.log(Itembox[i]);
//   }

//   //continue Keyword ข้าม "bb" ไปทำต่อใน loop ต่อไป
//   for (let i = 0; i < Itembox.length; i++) {
//     if (Itembox[i] === "bb") {
//       continue;
//     }
//     console.log(Itembox[i]);
//   }
// }
// Arrayloop();

// // While Loop
// function Whileloop() {
//   let count = 1;
//   while (count < 100) {
//     count = count + 2;
//   }
//   console.log(count);
// }

// Whileloop();

function Exercise() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

Exercise();
