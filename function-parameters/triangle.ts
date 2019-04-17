export default class Triangle {

  sides: number[]

  /*
   The compiler will build an array of the arguments passed in with the name given after the ellipsis (...)
   https://www.typescriptlang.org/docs/handbook/functions.html
   */
  constructor(...sides: number[]) {
    this.sides = sides
  }

  kind() {
    if (this.sides[0] <= 0 || this.sides[1] <= 0 || this.sides[2] <= 0) { throw Error(); }

    if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[0] + this.sides[2] <= this.sides[1] || this.sides[1] + this.sides[2] <= this.sides[0]) {
      throw Error();
    }

    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return 'equilateral';
    }
    if (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || this.sides[0] === this.sides[2]) {
      return 'isosceles';
    }
    return 'scalene';

  }
}