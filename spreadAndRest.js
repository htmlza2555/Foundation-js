// * Create a function called updateAddress that receive 2 arguments, obj that refers to a person object,
// and newAddress that is a new value for address. This function should return a new person object with a new address.

const person = {
  name: "John",
  age: 20,
  address: "Rama 2",
};

const updateAddress = (obj, newAddress) => {
  // * fill here
  return {
    ...obj,
    address: newAddress,
  };
};

const personWithNewAddress = updateAddress(person, "Rama 9");

console.log(personWithNewAddress);
// * Expected output
// * { name: "John", age: 20, address: "Rama 9" }
