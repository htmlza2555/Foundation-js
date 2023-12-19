console.log("*    Easy    *");
// 1 Write a function mapRevertSign(arr)
// mapRevertSign(arr) takes in an array of numbers, and returns a new array of numbers containing opposite signs of the original array.
const mapRevertSign = (arr) => {
  const x = [];

  arr.forEach((element) => {
    x.push(0 - element);
  });
  return x;
};

console.log("1.mapRevertSign: ", mapRevertSign([1, -4, 2, 0]));
console.log("-------------------------------------------------");

// 2 Write a function reverse(arr)
// reverse(arr) returns a new array which is arr reversed.
// You are not allowed to use Array.reverse method.
function reverse(array) {
  const output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}

console.log("2.Reverse: ", reverse([1, 2, 3, 4, 5]));
console.log("-------------------------------------------------");

// 3 Write a function isMember(mem, arr)
// isMember(mem, arr) returns a boolean indicating whether mem is a member of arr
// Do not use Array helper methods - use a simple for loop
const isMember = (mem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) return true;
  }
  return false;
};
console.log("3.check mem === arr: ");
console.log(isMember(5, [1, 3, 7, 12])); // false
console.log(isMember("john", ["jane", "jim", "john"])); // true
console.log("-------------------------------------------------");

// 4 Write a function unique(arr)
// unique(arr) takes in an array of numbers arr and returns a new array whose elements are unique.
// You can use isMember implemented above.
/* ไม่ใช้ isMember จากข้อ3
function unique(value, index, arr) {
  return arr.indexOf(value) === index;
}
const a = [10, 20, 10, 20, 30, 50, 60, 100];
const uniq = a.filter(unique);
console.log("4.Unique: ", uniq); */
const unique = (arr) => {
  return arr.reduce((prev, curr) => {
    // reduce ค่าก่อนหน้า กับ ค่าปัจจุบัน
    if (isMember(curr, prev)) {
      // ถ้า ค่าปัจจุบัน = ค่าก่อนหน้า
      return prev; // return ค่าก่อนหน้า
    } else {
      prev.push(curr); // push curr เข้าไปใน prev
      return prev; // return ค่าก่อนหน้า
    }
  }, []); // เก็บค่าทั้งหมดที่ return ไว้ใน []
};
console.log("4.", unique([10, 20, 10, 20, 30, 50, 60, 100]));
console.log("-------------------------------------------------");

// 5 Write a function draw(n)
// draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:
// Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)
const draw = (n) => {
  if (n < 0) return;
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n; j++) {
      star += "*";
    }
    console.log(star);
  }
};
console.log("5.");
draw(5);
console.log("-------------------------------------------------");

// 6 Re-write draw(n) as drawNg(n) (-ng suffix is usually used for next-gen) Like draw(n), but this time drawNg(n) prints this pattern:
// Hint: Use nested loop, using assignment operator “=+”, and “\n” which is new line character (read “back-slash-N”)
const drawNg = (n) => {
  if (n < 0) return;
  let star = "";
  for (let i = 1; i <= n; i++) {
    console.log((star += "*"));
  }
};
console.log("6.");
drawNg(5);
console.log("-------------------------------------------------");

// * TA answer
// const drawNg = (n) => {
//   if (n < 0) return;

//   for (let i = 0; i < n; i++) {
// *Initialize s
//     let s = "";

// * Loop for each star
//     for (let j = 0; j <= i; j++) {
//       s += "*";
//     }
//     console.log(s);
//   }
// };

// drawNg(5);
/////////////////////////////////////////////////

// 7 Write a function mutual(arr1, arr2)
// mutual(arr1, arr2) returns a new array containing all mutual members of arr1 and arr2
const mutual = (arr1, arr2) => {
  return arr1.filter((value) => arr2.includes(value)); // includes value ใน arr2 กับ arr1 แล้ว filter ออกมา
};
const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

console.log("7. intersec array:");
console.log(mutual(class1, class2)); // ["John", "Bob"]
console.log("-------------------------------------------------");

// 8 Write a fizzBuzz(n) function
// fizzBuzz(n) iterates over inclusive range [1, n], and for each element in the range, fizzBuzz(n) prints Fizz if the element is divisible by 3, Buzz if the element is divisible by 5, and FizzBuzz if the element is divisible by 3 and 5.
// If no conditions are met, fizzBuzz(n) prints the element.
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};
console.log("8.fizzBuzz(n) iterates over inclusive range[1, n]:");
fizzBuzz(20);
console.log("-------------------------------------------------");

// 9 GCD หรม. Write a GCD function gcd(a, b)
// gcd(a, b) returns greatest common divisor (GCD / หรม.) between the pair a, b
const gcd = (a, b) => {
  for (let i = 0; i < b; ) {
    const x = b;
    b = a % b;
    a = x;
  }
  return a;
};

console.log("9.GCD หรม.: ");
console.log(gcd(125, 400));
console.log("-------------------------------------------------");

// 10 filterLt หาค่าน้อยกว่า n ใน arr3
// Write a function filterLt(n, arr)
// filterLt(n, arr) takes in an a number n and an array of numbers arr, and returns a new array containing all elements of arr that is lesser than (lt) n.
// Do not use Array helper methods - use a simple for loop
const filterLt = (n, arr3) => {
  const a = [];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < n) {
      a.push(arr3[i]);
    }
  }
  return a;
};

const arr3 = [120, 112, 111, 130, 169, 101];

console.log("10.filterLt: ");
console.log(filterLt(0, arr3)); // []
console.log(filterLt(112, arr3)); // [111, 101]
console.log("-------------------------------------------------");

// 11 filterGt หาค่ามากกว่า n ใน arr3
// Write a function filterGt(n, arr)
// filterGt(n, arr) performs similar business logic to filterLt(n, arr) above, but instead of doing a lesser-than test, it does a greater-than test
// Do not use Array helper methods - use a simple for loop
const filterGt = (n, arr4) => {
  const a = [];
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] > n) {
      a.push(arr4[i]);
    }
  }
  return a;
};

const arr4 = [120, 112, 111, 130, 169, 101];

console.log("11.filterGt: ");
console.log(filterGt(0, arr4)); // []
console.log(filterGt(112, arr4)); // [111, 101]
console.log("-------------------------------------------------");

// 12 ดอกเบี้ยทบต้นทบดอก compoundedReturn
// Implement a programmable logic to compute compounded return
// Compounded returns are an investment strategy in which the interest income earned from the previous period is also invested into the current period.
// This is like how we earn interests from savings accounts.
// The interface (function signature) to this logic should be as simple as compoundedReturn(amount, interest, n)
// where amount is the amount of fund invested in the 1st period, interest is an interest percentage per period,
// and n is the number of periods of the investment.
const compoundedReturn = (amount, interest, n) => {
  sumAmount = amount * (1 + interest / 100) ** n;
  return sumAmount;
};
console.log("12.compoundedReturn: ");
console.log(compoundedReturn(100, 1, 1)); // 101
console.log(compoundedReturn(100, 10, 1)); // 110
console.log(compoundedReturn(100, 10, 2)); // 121
console.log("-------------------------------------------------");

// 13.Write a function mean(arr)
// mean(arr) returns the mean average value of arr dataset (represented as an array).
// If any one of arr members are of non-number type, mean(arr) returns null
// *********TA code***********
// const mean = (arr) => {
//   let sum = 0

//   const isAllNumber = arr.every((val) => typeof val === 'number') //ใช้ arr.every เช็คทุกตัว

//   if (!isAllNumber) return null

//   arr.forEach((n) => {
//     sum += n
//   })

//   return sum / arr.length
// }
const mean = (arr) => {
  const average = arr.reduce((a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return null;
    } else {
      return a + b;
    }
  });
  if (average === null) {
    return average;
  } else {
    return average / arr.length;
  }
};

console.log("13.average value string is null: ");
console.log(mean([1, 2, 3])); // 2
console.log(mean([1, "foo", 3])); // null
console.log("-------------------------------------------------");

// 14.Write a function mid(arr)
// mid(arr) returns the array containing middle element(s) of array arr.
// If the array length is an even number, mid returns the 2 middle elements.
const mid = (arr) => {
  if (arr.length === 1) return arr;

  const middlePosition = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    const elem1 = arr[middlePosition - 1];
    const elem2 = arr[middlePosition];

    return [elem1, elem2];
  }

  return [arr[middlePosition]];
};
console.log("14.console mid value: ");
console.log(mid(["john"])); // ["john"]
console.log(mid(["foo", "bar", "baz"])); // ["bar"]
console.log(mid([1, 2, 3, 4])); // [2, 3]
console.log("-------------------------------------------------");

// 15 Try learning Array.sort method (function) with this snippet:
// The sort method does now work as we expect. Instead of sorting by numeric value, it seems the sort method sorts elements as strings (hence it did not produce [1, 2, 3, 11, 12, 13]).
// After learning the root cause, try fixing this problem/implementing on your own.
// Hint: a callback function can be sent to Array.sort
const arr2 = [3, 2, 1, 12, 13, 11];
arr2.sort((a, b) => a - b);

console.log("15.Try Array.sort(): ");
console.log(arr2); // [1, 11, 12, 13, 2, 3]
console.log("-------------------------------------------------");

// 16 Write a function median(arr)
// median(arr) returns the statistical median from the dataset arr (represented as an array).
// A dataset's median is the element at the middle of the sorted list. You are allowed to use Array.sort method for this implementation
// Hint: You can use mid() and mean() implemeted above to solve this problem.
const median = [2, 1, 5, 3, 4];
median.sort();
console.log("16.Array.sort เรียงข้อมูลใหม่ แล้วเรียกใช้ mid(arr) จากข้อ 14: ");
console.log(mid(median));
console.log("-------------------------------------------------");

// 17 Write a function initArr(val, len)
// initArr(val, len) returns an array of length len with all members initialized to val.
const initArr = (val, len) => {
  if (len < 0) return;
  let intVal = [];
  for (let i = 0; i < len; i++) {
    intVal += val;
  }
  console.log(intVal);
};
console.log("17.initArr: ");
initArr(0, 5);
console.log("-------------------------------------------------");

// 18 Write a function flatMap(arr)
// flatMap(arr) takes in an array of arrays, and returns the flattened array.
const flatMap = (arr) => {
  const flattened = [];
  //Since we sent the nested array into this function, elem is also an array
  arr.forEach((elem) => {
    // * 1st loop
    // elem -> [1, 2, 3]
    // * flattened.push(1, 2, 3)
    flattened.push(...elem);
  });

  return flattened;
};

const arr = [
  [1, 2, 3],
  [100, 200],
  [10, 20],
];
console.log("18.");
console.log(flatMap(arr)); // * [1, 2, 3, 100, 200, 10, 20]
console.log("-------------------------------------------------");

// 19 Write a function mapMean(arr)
// mapMean(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the mean average value of arr[i].
// You are allowed to use mean(arr) written above.
const mapMean = (arr) => {
  return arr.map((i) => mean(i));
};
console.log("19.mapMean:");
console.log(
  mapMean([
    [1, 2, 3],
    [100, 200],
    [10, 20],
  ])
);
// mapMean(arr); // [2, 150, 15]
console.log("-------------------------------------------------");

// 20 Fibonacci บวกเลขทบต้น Write a function fib(n)
// fib(n) prints the Fibonacci series up to n terms.
// The series look like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
const fib = (n) => {
  let n1 = 0, // สร้างตัวแปร 3 ตัวเพื่อนรับค่าเปลี่ยนค่า
    n2 = 1,
    newN;
  console.log(n1); // 0
  console.log(n2); // 1
  for (let i = 2; i < n; i++) {
    newN = n1 + n2;
    console.log(newN); // 1
    n1 = n2;
    n2 = newN;
  }
};
console.log("20.Fibonacci :");
fib(6);
console.log("-------------------------------------------------");

// 21 Write a function toBytes(s)
// toBytes(s) takes in a string s and returns an array of ASCII bytes formed by s.
// If a character in s is invalid ASCII, the character is omitted from the returned array.
// Hint: JavaScript strings have method s.charCodeAt(i) which returns the ASCII code of the character at index i of string s
const toBytes = (s) => {
  // * We don't know yet if s contains any non-ASCII char,
  // * so we start with empty an array.
  const bytes = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);

    if (char > 255) {
      continue;
    }
    bytes.push(char);
  }
  return bytes;
};
console.log("21.");
console.log(toBytes("Bar")); // [ 66, 97, 114 ]
console.log(toBytes("Foo")); // [ 70, 111, 111 ]
console.log(toBytes("🔥Foo")); // [ 70, 111, 111 ] because the emoji is invalid ASCII
console.log("-------------------------------------------------");

console.log("***  Medium  ***");
// 1 Write a function maxNegMinPos(arr)
// maxNegMinPos(arr) takes in an array arr,
// and it prints the max negative value (maxNeg) as well as the min positive value (minPos)
const maxNegMinPos = (arr) => {
  // These could be null
  let maxNeg = null;
  let minPos = null;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (elem < 0) {
      // negative
      if (!maxNeg) {
        // check
        maxNeg = elem; //assign
        continue;
      }

      if (elem > maxNeg) {
        //check
        maxNeg = elem; //reassign
      }
    } else {
      // positive
      if (!minPos) {
        minPos = elem;
        continue;
      }
      if (elem < minPos) {
        minPos = elem;
      }
    }
  }
  console.log(`1.maxNegMinPos: \nMaxNeg is ${maxNeg}\nMinPos is ${minPos}`);
};

maxNegMinPos([12, -13, 14, 4, 2, -1, -18]); // -1 2
console.log("-------------------------------------------------");

// 2 Write a function drawDown(chart)
// prime(n) returns an array of first n prime numbers
// Hint: keep a list of prime numbers, and check subsequent number iterations against the list.
// const isPrime = (n) => {
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
const check_prime = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (var x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
};
const prime = (n) => {
  let nPrime = [];
  let i = 2;
  while (nPrime.length < n) {
    if (check_prime(i)) {
      nPrime.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  console.log(nPrime);
};
console.log("2.prime:");
prime(4);
prime(5);
console.log("-------------------------------------------------");

// 3 Write a function drawDown(chart)
// drawDown(chart) returns the biggest downward movement within the chart points
// Where chart is points in a chart, represented as an array of numbers: [110, 105, 95, 9, 80, 17, 120, 115, 11]
// Hint: you must keep states
const chart = [110, 105, 95, 9, 80, 17, 120, 115, 11];
let drawDown = chart.reduce((prev, curr) => {
  if (curr > prev) {
    prev = curr;
    return prev - curr;
  } else {
    prev = 0;
    return prev;
  }
});

console.log(drawDown);
console.log("-------------------------------------------------");

console.log("*****  CHALLENGES  *****");
// 1. Write a function summarize(text, trail, len)

// summarize(text, trail, len) returns the shortest preview of text.

// If text fits within len, then summarize returns the whole text.

// If text is longer than len, then summarize will truncate text and appends trail (e.g.  ... with a whitespace at the front) to the return string.

// The whole return string must fit into len, i.e. its length must not exceed len.

// The returned text must contain only whole words (i.e. words are separated by whitespace  ). Partial words are not allowed.

// If len is smaller than 3, and text does not fit len, summarize returns an empty string "".

function summarize(text, trail, len) {
  if (len < 3 || text.length <= len) {
    return text.length <= len ? text : "";
  }

  let truncated = text.substr(0, len - trail.length);

  if (text.charAt(truncated.length) !== " ") {
    const lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace !== -1) {
      truncated = truncated.substr(0, lastSpace);
    }
  }

  return truncated.trim() + trail;
}

const articleCleverse =
  "I am from Cleverse Academy! Today, I’m here to teach you some JavaScript programming";

console.log(summarize(articleCleverse, " ...", 30)); // "I am from Cleverse Academy! ..."

const articleFoo = "Good morning ladies and gentlemen";

console.log(summarize(articleFoo, " ...", 2)); // ""
console.log(summarize(articleFoo, " ...", 10)); // "Good ..."
console.log(summarize(articleFoo, " ...", 20)); // "Good morning ..."
console.log(summarize(articleFoo, " ...", 25)); // "Good morning ladies ..."

console.log("-------------------------------------------------");

// 2. Write a function mode(arr)

// mode(arr) returns the statistical mode from the dataset arr (represented as an array).

// A dataset's mode is the value which appears most frequently in a dataset. If none is found, or if there are no clear winner, mode(arr) returns null

// Hint: It can be done in 2 ways: the first is by using a HashMap, the second is by using an Object. You may need to research how to use HashMap in JavaScript.

function mode(arr) {
  if (arr.length === 0) return null;

  let modeMap = {};
  let maxCount = 1;
  let modes = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (modeMap[el] === undefined) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] === maxCount) {
      modes.push(el);
    }
  }

  return modes.length === 1 ? modes[0] : null;
}

console.log(mode([2, 5, 2, 4, 5])); // null
console.log(mode([1, 2, 1, 4, 5, 6, 2, 1])); // 1

console.log("-------------------------------------------------");

// 2.1 Write a function mapMode(arr)

// mapMode(arr) takes in an array of arrays, and returns an array of numbers whose element at index i maps to the statistical mode of arr[i].

// You are allowed to use mode(arr) written above.

function mapMode(arr) {
  return arr.map((innerArr) => mode(innerArr));
}

const arr5 = [
  [1, 2, 3, 1],
  [100, 200],
  [10, 20],
];

console.log(mapMode(arr5));

console.log("-------------------------------------------------");

// 3. Write a function transpose(bits, w, h)

// transpose(bits, w, h) transposes an array bits into arrays of arrays, based on the value of w, h, and to some extent bits.

// For example, consider this scenario: we are working on a image processing engine.

// The image files are represented on disks or in memory as just a long list (array) of bytes, much like any files:

// // How files are represented on disk as arrays of bits,
// // and when they are first loaded to memory.
// ;[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0]
// Now, let's assume that the image file format for our programs are just simple 1-bit bitmap files, that is, each bit represent a pixel, with 0 being a black pixel and 1 being a white one.

// Although our simple app is only limited to processing 1-bit images, the resolution (the width and the height of the image) can vary file by file.

// Without image compression, this means that larger images will have larger length (file size).

// Because displays are 2D in nature - to display the bitmap image, we need to do some transposing when rendering images to the screens.

// And because the width and height of images may vary, we need a way to map the 1D array into 2D one.

// Implement the function that can performs the following operations:

function transpose(bits, w, h) {
  if (bits.length !== w * h) {
    return "Invalid dimensions for the given array size.";
  }

  const transposedImage = [];
  for (let i = 0; i < h; i++) {
    transposedImage.push(bits.slice(i * w, (i + 1) * w));
  }

  return transposedImage;
}

const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

console.log(transpose(imageBytes, 8, 2));
// Output:
// [
//  [1, 0, 1, 0, 0, 0, 0, 0],
//  [1, 0, 1, 0, 1, 1, 1, 1]
// ]

console.log(transpose(imageBytes, 2, 8));
// Output:
// [
//  [1, 0],
//  [1, 0],
//  [0, 0],
//  [0, 0],
//  [1, 0],
//  [1, 0],
//  [1, 1],
//  [1, 1]
// ]

console.log("-------------------------------------------------");

// 4. Write a function transposable(arr, w, h)

// Related to transpose(arr, w, h) above

// transposable(arr, w, h) returns a boolean, indicating whether the array arr could be transposed with w and h. It is considered transposable if the resulting 2D array can form a rectangle (all rows have uniform length).

const image = [1, 0, 1, 0, 1, 1]; // len = 6

const transposable = (arr, w, h) => {
  return arr.length === h * w && arr.length % w === 0;
};

console.log(transposable(image, 2, 3)); // true
console.log(transposable(image, 6, 1)); // true
console.log(transposable(image, 4, 2)); // false

console.log("-------------------------------------------------");

// 5. Write a function markdownToHTML(md)

// markdownToHTML(md) takes in a Markdown string md and returns a HTML string parsed from md.

// You can just parse the header tags (<h1>, <h2>, and so on) and the paragraph tag <p> and ignore the rest of Markdown standard.

// Hint: JavaScript strings have method s.startsWith(p) which returns a boolean indicating whether s is prefixed with p

function markdownToHTML(md) {
  const lines = md.split("\n");
  let html = "";

  for (const line of lines) {
    if (line.startsWith("# ")) {
      const headerLevel = line.lastIndexOf("#") - line.indexOf("#") + 1;
      const headerText = line.substring(headerLevel + 1).trim();
      html += `<h${headerLevel}>${headerText}</h${headerLevel}>`;
    } else if (line.startsWith("## ")) {
      const headerLevel = line.lastIndexOf("#") - line.indexOf("#") + 2;
      const headerText = line.substring(headerLevel + 1).trim();
      html += `<h${headerLevel}>${headerText}</h${headerLevel}>`;
    } else if (line.trim().length > 0) {
      html += `<p>${line}</p>`;
    }
  }

  return html;
}

const md = `
# This is H1

## This is H2

This is a paragraph
`;

console.log(markdownToHTML(md));

console.log("-------------------------------------------------");
