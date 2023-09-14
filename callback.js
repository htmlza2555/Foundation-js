// function callMe() {
//   console.log(`hello from callback function`);
// }
// function greeting(callback) {
//   console.log(`hello world`);
//   callback();
// }
// greeting(callMe);

//**Annonymouse function เขียนใหม่ใช้เพื่อความสะดวก ไม่ต้องมาหาฟังชั่น **
// greeting(function () {
//   console.log("Annonymous function");
// });

// //**Annonymouse arrow function **
// greeting(() => {
//   console.log("Annonymous arrow function");
// });

// // Callback function with parameter
// function greeting2(callback) {
//   console.log(`hello world`);
//   callback("TLE");
// }

// greeting2((name) => {
//   console.log(`Sawaddee ja ${name}`);
// });

// const originalArr = [1, 2, 3, 4];

// const loopThroughArrayV2 = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);  /* ส่งค่า i ไปที่ cb */
//   }
// };

// loopThroughArrayV2(originalArr, (item) => {     /* รับค่า i ไปใช้ใน (item) */
//   console.log(item);
// });

// const mapArray = (arr, cb) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const newItem = cb(arr[i]);
//     result.push(newItem);
//   }
//   return result;
// };

// const newArr = mapArray(originalArr, (item) => {
//   return item + 1;
// });

// console.log(newArr);
// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items
function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0; // * fill here
});

console.log(afterFilter);
