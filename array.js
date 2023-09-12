// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.
const foods = ["Kapraw", "Kua-gling", "Panang", "Chuchee"];

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
console.log(foods.indexOf("Kapraw"));
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.
foods.push("banana", "icecream", "cake");
console.log(foods);
// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)
console.log(foods.includes("Kapraw"));
