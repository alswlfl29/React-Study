"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // 너비 가져오는 함수 구현
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
