const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
const result={...profile,...updates,address:{...profile.address,...updates.address}};//  for address applied nested level spread operator
console.log(result);