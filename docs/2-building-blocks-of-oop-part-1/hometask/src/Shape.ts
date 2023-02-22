import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[], color = 'green', filled = true) {
    if (points.length !== 3) {
      throw new Error('Error points need to have three points');
    }
    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString(): string {
    let str: string = '';
    this.points.forEach((point, i) => {
      str += `(${point.x}, ${point.y}), `;
    })

    if (!this.filled) {
      return `A Shape with color of ${this.color} and not filled. Points: ${str.substring(0, str.length-2)}.`;
    }

    return `A Shape with color of ${this.color} and filled. Points: ${str.substring(0, str.length-2)}.`;
  }

  getPerimeter(): number {
    const l1 = this.points[0].distance(this.points[1]);
    const l2 = this.points[1].distance(this.points[2]);
    const l3 = this.points[2].distance(this.points[0]);

    const result: number = l1 + l2 + l3;

    return result;
  }

  abstract getType(): string;
}
