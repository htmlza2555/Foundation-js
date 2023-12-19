// // // const isMember = (value, arr) => {
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (arr[i] === value) {
// // //       return true;
// // //     }
// // //   }
// // //   return false;
// // // };

// // // console.log(isMember(5, [1, 3, 7, 12])); // false
// // // console.log(isMember("john", ["jane", "jim", "john"])); // true

// // // const arr = [10, 20, 10, 20, 30, 50, 60, 100];
// // // const unique = (arr) => {
// // //   return arr.reduce((prev, curr) => {
// // //     if (isMember(curr, prev)) {
// // //       return prev;
// // //     } else {
// // //       prev.push(curr);
// // //       return prev;
// // //     }
// // //   }, []);
// // // };

// // // console.log(unique(arr)); // [10, 20, 30, 50, 60, 100]
// // // function summarize(text, trail, len) {
// // //   if (len < 3 || text.length <= len) {
// // //     return text.length <= len ? text : "";
// // //   }

// // //   let truncated = text.substr(0, len - trail.length);

// // //   if (text.charAt(truncated.length) !== " ") {
// // //     const lastSpace = truncated.lastIndexOf(" ");
// // //     if (lastSpace !== -1) {
// // //       truncated = truncated.substr(0, lastSpace);
// // //     }
// // //   }

// // //   return truncated.trim() + trail;
// // // }

// // // const articleCleverse =
// // //   "I am from Cleverse Academy! Today, I’m here to teach you some JavaScript programming";

// // // console.log(summarize(articleCleverse, " ...", 30)); // "I am from Cleverse Academy! ..."

// // // const articleFoo = "Good morning ladies and gentlemen";

// // // console.log(summarize(articleFoo, " ...", 2)); // ""
// // // console.log(summarize(articleFoo, " ...", 10)); // "Good ..."
// // // console.log(summarize(articleFoo, " ...", 20)); // "Good morning ..."
// // // console.log(summarize(articleFoo, " ...", 25)); // "Good morning ladies ..."
// // function mode(arr) {
// //   if (arr.length === 0) return null;

// //   let modeMap = {};
// //   let maxCount = 1;
// //   let modes = [];

// //   for (let i = 0; i < arr.length; i++) {
// //     let el = arr[i];
// //     if (modeMap[el] === undefined) modeMap[el] = 1;
// //     else modeMap[el]++;

// //     if (modeMap[el] > maxCount) {
// //       modes = [el];
// //       maxCount = modeMap[el];
// //     } else if (modeMap[el] === maxCount) {
// //       modes.push(el);
// //     }
// //   }

// //   return modes.length === 1 ? modes[0] : null;
// // }

// // console.log(mode([2, 5, 2, 4, 5])); // null
// // console.log(mode([1, 2, 1, 4, 5, 6, 2, 1])); // 1

// // function mapMode(arr) {
// //   return arr.map((innerArr) => mode(innerArr));
// // }

// // const arr = [
// //   [1, 2, 3, 1],
// //   [100, 200],
// //   [10, 20],
// // ];

// // console.log(mapMode(arr));

// // function transpose(bits, w, h) {
// //   if (bits.length !== w * h) {
// //     return "Invalid dimensions for the given array size.";
// //   }

// //   const transposedImage = [];
// //   for (let i = 0; i < h; i++) {
// //     transposedImage.push(bits.slice(i * w, (i + 1) * w));
// //   }

// //   return transposedImage;
// // }

// // const imageBytes = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

// // console.log(transpose(imageBytes, 8, 2));
// // // Output:
// // // [
// // //  [1, 0, 1, 0, 0, 0, 0, 0],
// // //  [1, 0, 1, 0, 1, 1, 1, 1]
// // // ]

// // console.log(transpose(imageBytes, 2, 8));
// // // Output:
// // // [
// // //  [1, 0],
// // //  [1, 0],
// // //  [0, 0],
// // //  [0, 0],
// // //  [1, 0],
// // //  [1, 0],
// // //  [1, 1],
// // //  [1, 1]
// // // ]

// const image = [1, 0, 1, 0, 1, 1]; // len = 6

// const transposable = (arr, w, h) => {
//   return arr.length === h * w && arr.length % w === 0;
// };

// console.log(transposable(image, 2, 3)); // true
// console.log(transposable(image, 6, 1)); // true
// console.log(transposable(image, 4, 2)); // false
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
