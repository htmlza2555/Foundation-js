// const person = {
//   name: "John",
//   age: 20,
//   pet: {
//     kind: "Dog",
//     age: 2,
//   },
// };
// console.log(person.name); //John
// console.log(person["name"]); //John
// console.log(person.pet.kind); //Dog

// * Review Reference Type
// const person2 = person;
// person2.name = "Tle";

// console.log("person 1:", person);
// console.log("person 2:", person2);

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach((data, idx) => {
  console.log("Person ", idx + 1);
  console.log("Name:", data.name);
  console.log("age:", data.age);
  console.log("job:", data.job);
  console.log("__________________");
});

// data.map((data, idx) => {
//   console.log("Person: ", idx + 1);
//   console.log("Name:", data.name);
//   console.log("age:", data.age);
//   console.log("job:", data.job);
//   console.log("__________________");
// });
