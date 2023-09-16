// Easy
// 1
const mapRevertSign = (arr) => {
  const x = [];

  arr.forEach((element) => {
    x.push(0 - element);
  });
  return x;
};

console.log("1.mapRevertSign: ", mapRevertSign([1, -4, 2, 0]));

// 2
function reverse(array) {
  const output = [];
  while (array.length) {
    output.push(array.pop());
  }

  return output;
}

console.log("2.Reverse: ", reverse([1, 2, 3, 4, 5]));

// 3

const isMember = (mem, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (mem === arr[i]) return true;
  }
  return false;
};
console.log("3.check mem === arr: ");
console.log(isMember(5, [1, 3, 7, 12])); // false
console.log(isMember("john", ["jane", "jim", "john"])); // true

// 4
function unique(value, index, arr) {
  return arr.indexOf(value) === index;
}

const a = [10, 20, 10, 20, 30, 50, 60, 100];
const uniq = a.filter(unique);

console.log("4.Unique: ", uniq);

// 5
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

// 6
const drawNg = (n) => {
  if (n < 0) return;
  let star = "";
  for (let i = 1; i <= n; i++) {
    console.log((star += "*"));
  }
};
console.log("6.");
drawNg(5);

// TA answer
// const drawNg = (n) => {
//   if (n < 0) return;

//   for (let i = 0; i < n; i++) {
//     // *Initialize s
//     let s = "";

//     // * Loop for each star
//     for (let j = 0; j <= i; j++) {
//       s += "*";
//     }
//     console.log(s);
//   }
// };

// drawNg(5);
/////////////////////////////////////////////////

// 7
const mutual = (arr1, arr2) => {
  return arr1.filter((value) => arr2.includes(value)); // includes value ใน arr2 กับ arr1 แล้ว filter ออกมา
};
const class1 = ["Alice", "Bob", "John", "Jane"];
const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

console.log("7. intersec array:");
console.log(mutual(class1, class2)); // ["John", "Bob"]

// 8

console.log("8.ยังไม่ทำ");

// 9 GCD หรม.
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

// 10 filterLt หาค่าน้อยกว่า n ใน arr3
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

// 11 filterGt หาค่ามากกว่า n ใน arr3

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

// 12 ดอกเบี้ยทบต้นทบดอก compoundedReturn

const compoundedReturn = (amount, interest, n) => {
  sumAmount = amount * (1 + interest / 100) ** n;
  return sumAmount;
};
console.log("12.compoundedReturn: ");
console.log(compoundedReturn(100, 1, 1)); // 101
console.log(compoundedReturn(100, 10, 1)); // 110
console.log(compoundedReturn(100, 10, 2)); // 121

// 13

const mean = (arr) => {
  const middlePosition = (arr.length - 1) / 2;

  if (typeof arr[middlePosition] !== "number") {
    return null;
  } else {
    return [arr[middlePosition]];
  }
};

console.log("13.average value string is null: ");
console.log(mean([1, 2, 3])); // 2
console.log(mean([1, "foo", 3])); // null

// 14

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

// 15

const arr2 = [3, 2, 1, 12, 13, 11];
arr2.sort();

console.log("15.Try Array.sort(): ");
console.log(arr2); // [1, 11, 12, 13, 2, 3]

// 16

const median = [2, 1, 5, 3, 4];
median.sort();
console.log("16.Array.sort เรียงข้อมูลใหม่ แล้วเรียกใช้ mid(arr) จากข้อ 14: ");
console.log(mid(median));

// 17

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

// 18
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

// 19

console.log("19.ยังไม่ทำ");
// mapMean(arr); // [2, 150, 15]

// 20 Fibonacci บวกเลขทบต้น
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

// 21
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

// M.1.

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
  console.log(`1.MEDIUM : \nMaxNeg is ${maxNeg}\nMinPos is ${minPos}`);
};

maxNegMinPos([12, -13, 14, 4, 2, -1, -18]); // -1 2
