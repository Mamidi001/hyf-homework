//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

let timeout = setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//Create a function that takes 2 parameters: delay and stringToLog

function delayFunction(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
delayFunction(5, "appear after 5 sec");

//Create a button in html. button should work after 5 sec

const button = document.getElementById("myBtn");
button.addEventListener("click", () => {
  delayFunction(5, "appear after 5sec clicking the button");
});

// Create two functions and assign(call) them to two different variables.
function earth() {
  planet1 = " ";
  console.log("earth");
}
function saturn() {
  palnet2 = " ";
  console.log("saturn");
}
const planetLogFunction = (planetLogFunction) => {
  planetLogFunction();
};

planetLogFunction(earth);
planetLogFunction(saturn);

//5 location
let myBtn2 = document.getElementById("myBtn2");
let latitudeText = document.getElementById("latitude");
let longitudeText = document.getElementById("longitude");
button.addEventListener("click", function (e) {
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    latitudeText.innerText = latitude.toFixed(2);
    longitudeText.innerText = longitude.toFixed(2);
  });
});

//6 location in map
let button2 = document.getElementById("myBtn2");
let locationLink = document.querySelector("#locationlink");
button2.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    locationLink.href = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed`;
    locationLink.innerText = `click here to see where are you in the map`;
  });
});

//Create a function called runAfterDelay. It has two parameters: delay and callback.
//When called the function should wait delay seconds and then call the provided callback function.

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});
runAfterDelay(1, function () {
  console.log("😀");
});
// double click (somehow it is not working)

const body = document.querySelector("#body");
document.addEventListener("dblclick", function (e) {
  console.log("double click");
});

// funny joke or bad joke

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
const logFunnyJoke = () => {
  console.log("this is a funny joke");
};
const logBadJoke = () => {
  console.log("this is a bad joke");
};
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const array = [green(), yellow(), blue()];
array.forEach((item) => item);

function green() {
  console.log("leaves are green");
}
function yellow() {
  console.log("mango is yellow");
}
function blue() {
  console.log("sky is blue");
}
//Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested:
console.log(sum(5, 3));

const addition1 = function (num1, num2) {
  return num1 + num2;
};
console.log(addition1(2, 3)); // we can't call before appllying conditions

function sum(num1, num2) {
  return num1 - num2;
}

const obj = {
  firstName: "swetha",
  lastName: "kancharla",
  fullName: function name() {
    return this.firstName + this.lastName;
  },
};
console.log(obj.fullName());
