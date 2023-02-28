import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(v1: Point, v2: Point, v3: Point) {
    super([v1, v2, v3]);
  }

  toString(): string {
    let str: string = '';
    this.points.forEach((point, i) => {
      str += `v${i+1}=(${point.x}, ${point.y}),`;
    })

    return `Triangle[${str.substring(0, str.length-1)}]`;
  }

  getType(): string {
    const l1 = this.points[0].distance(this.points[1]).toFixed();
    const l2 = this.points[1].distance(this.points[2]);
    const l3 = this.points[2].distance(this.points[0]);

    if (l1 === l2.toFixed() && l2.toFixed() === l3.toFixed() && l1 === l3.toFixed()) {
      return "equilateral triangle";
    } if ((l1 === l2.toFixed()) || (l2 === l3) || (l1 === l3.toFixed())) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }
}
