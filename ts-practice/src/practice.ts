// shape 라는 interface 선언
interface Shape {
  getArea(): number;
  //Shape interface에는 getArea라는 함수가 꼭 존재해야하고 반환값는 숫자이어야함
}

class Circle implements Shape {
  //`implements`키워드 사용하여 해당 클래스가 Shape interface의 조건 충족하겠다고 명시

  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비 가져오는 함수 구현
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
console.log(rectangle.width); //불가능

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
