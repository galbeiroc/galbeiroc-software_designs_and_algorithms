interface IPoint {
  x:number;
  y:number;
  toString(): string;
  distance(x2?: number | Point, y2?: number): number;
}

export class Point implements IPoint {
  x:number;
  y:number;

  constructor(x:number = 0, y:number = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(x2?: Point): number;
  distance(x2?: number | Point, y2?: number): number {
    let tempValue: number;

    if (x2 instanceof Point) {
      const {x, y} = x2;
      tempValue = Math.sqrt(Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2));
      return tempValue
    } else if (typeof x2 === 'number' && typeof y2 === 'number') {
      tempValue = Math.sqrt(Math.pow((x2-this.x), 2) + Math.pow((y2-this.y), 2));
      return tempValue;
    } else {
      tempValue = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
      return tempValue;
    }
  }
}
