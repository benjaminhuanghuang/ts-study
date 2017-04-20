// Use constructor parameters as fields.
class Person2{
   constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      private age: number
   ) { }

   greetMe() {
      console.log(`Hello ${this.firstName}`);
   }
}

let p2 = new Person2('Jesse', 'Liberty', 'examplename@gmail.com', 21);
p2.greetMe();