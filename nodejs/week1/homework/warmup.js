console.log("inside warmup file");
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return this.radius * 2 * Math.PI;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}
const circle = new Circle(20);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());
const circle1 = new Circle(10);
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());
