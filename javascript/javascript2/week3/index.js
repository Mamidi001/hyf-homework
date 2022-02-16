const classmates = [
  {
    name: "swetha",
    age: 34,
  },
  {
    name: "shravya",
    age: 26,
    color: "red",
  },
  {
    name: "chunmei",
    age: 33 === 33,
  },
  {},
];
classmates.push("vahab");
console.log(classmates);
for (const newFriend of classmates) {
  if (newFriend.name === "ali") {
    console.log("ali is already in the group");
  }
}
classmates[1].age = 20;
console.log(Object.keys(classmates[1]).length === 0);
