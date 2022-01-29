const myCanvas = document.getElementById("testing");
const context = myCanvas.getContext("2d");
//making same width and height of the screen
let window_height = window.innerHeight;
let window_width = window.innerWidth;
myCanvas.width = window_width;
myCanvas.height = window_height;
myCanvas.style.background = "#E1F5C4";
//to get random color
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//paint a circle
context.beginPath();
context.arc(420, 320, 40, 0, 2 * Math.PI);
context.fillStyle = randomColor;
//context.fill();
context.closePath();

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
  draw(context) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    myCanvas.style.background = randomColor;
    // context.width = window.innerHeight;
    // context.height = window.innerWidth;
    context.beginPath();
    context.fill();
    context.lineWidth = 5;
    context.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      0,
      Math.PI * 2
    );
    context.stroke();
    context.closePath();
  }
}
setInterval(() => {
  // different dimensions of the circles
  const c1 = new Circle(190, 217, 20, 0, 2 * Math.PI);
  const c2 = new Circle(420, 180, 40, 0, 2 * Math.PI);
  const c3 = new Circle(200, 200, 40, 0, 2 * Math.PI);
  const c4 = new Circle(300, 260, 230, 0, 2 * Math.PI);
  const c5 = new Circle(415, 197, 20, 0, 2 * Math.PI);
  const c6 = new Circle(315, 397, 10, 0, 2 * Math.PI);
  c6.draw(context);
  c1.draw(context);
  c2.draw(context);
  c3.draw(context);
  c4.draw(context);
  c5.draw(context);
}, 2000);
let circle = document.getElementById("mouse");
document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
});
