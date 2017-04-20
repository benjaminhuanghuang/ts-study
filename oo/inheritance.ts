class Person{
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

class Student extends Person{
   constructor(
      firstName: string,
      lastName: string,
      email: string,
      age: number,
      private grade: string
   ){
      super(firstName, lastName, email, age);
   }
   greetMe() {
      super.greetMe();
      console.log(`I am in the ${this.grade} grade`);
   }
}

let student = new Student('Jesse', 'Liberty', 'examplename@gmail.com', 21, "6th");
student.greetMe();