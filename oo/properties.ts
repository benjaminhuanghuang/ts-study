
class Point {
  constructor(private _x?: number, private _y?: number) {
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0)
      throw new Error('value cannot be less than 0.');
    this._x = value;
  }
  get y() {
    return this._y;
  }

  draw() {
    console.log(`X : ${this._x}, Y: ${this._y}`);
  }
}

let p = new Point(1,2);
p.x = 10;
p.draw();