const firstWords = ['happy','smile','fun','party','friends','celebration','easy','awesome','weekend','masti'];
const secondWords =['google','facebook','twitter','insta','linkedin','watsapp','telegram','snapchat','skype','teams'];
const randomNumber = Math.floor(Math.random() * 10);
var startupName = firstWords[randomNumber]+" " + secondWords[randomNumber];
console.log(`The startup name is ${startupName} contains ${startupName.lenght} characters`);

