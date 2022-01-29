//create circle
const c = document.getElementById("final");
const ctx = c.getContext("2d");
//making same width and height of the screen
let window_height = window.innerHeight;
let window_width = window.innerWidth;
c.width = window_width;
c.height = window_height;
c.style.background = "#E1F5C4";
//to get random color
//const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//paint a circle
// ctx.beginPath();
// ctx.arc(420, 320, 40, 0, 2 * Math.PI);
// ctx.fillStyle = randomColor;
// ctx.fill();
// ctx.closePath();

//create a class for multiple circles
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    (this.x = x),
      (this.y = y),
      (this.r = r),
      (this.startAngle = startAngle),
      (this.endAngle = endAngle),
      (this.fillColor = fillColor);
  }
  draw() {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      0,
      Math.PI * 2
    );
    ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.closePath();
  }
}
const timeInterval = setInterval(() => {
  let circleArray = [];
  let createFunction = function (circle) {
    circle.draw();
  };
  for (let i = 0; i < 10; i++) {
    let xRandom = Math.random() * window.innerWidth;
    let yRandom = Math.random() * window.innerHeight;
    let randomColor =
      "rgba(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      ".5" +
      ")";
    let myCircle = new Circle(
      xRandom,
      yRandom,
      30,
      0,
      2 * Math.PI,
      randomColor
    );
    circleArray.push(myCircle);
    createFunction(circleArray[i]);
  }
}, 3000);

// follow the mouse
let circle = document.getElementById("mouse");
document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
});
