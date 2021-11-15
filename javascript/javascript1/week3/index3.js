
//remove name from an array

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  
  const namesToRemove = names.indexOf("Ahmad");
  //to remove specific element 
  names.splice(namesToRemove,1);
  console.log(names);
