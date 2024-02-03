// interface IPerson {
//   name: string;
//   sport: string;
//   country: string;
// }

// let person: IPerson = {
//   name: "Sachin",
//   sport: "Cricket",
//   xyz: 123,
//   country: "INDIA",
// };

class Car {
  private id: number;
  public name: string;
  speed: number;
  protected carMake: string = "1983";
  constructor(name: string = "", speed: number = 0) {
    this.name = name;
    this.speed = speed;
  }
  accelerate(): string {
    return `The car ${this.name} is running @ ${this.speed} kmph !`;
  }
}

let carObj = new Car();

class JamesBondCar extends Car {
  isArmed: boolean = false;
  constructor(name: string, speed: number, isArmed: boolean) {
    super(name, speed);
    this.isArmed = isArmed;
  }
  accelerate(): string {
    return super.accelerate() + "Is it armed ?" + this.isArmed;
  }
}

var jbc = new JamesBondCar("Aston Martin", 200, true);
console.log(jbc.accelerate());

// interface IPerson {
//   name: string;
//   sport: string;
//   country: string;
//   walk: () => void;
//   talk?: () => void;
// }

// class Person implements IPerson {
//   name: string;
//   sport: string;
//   country: string;
//   walk() {
//     console.log("Walking.. ");
//   }
// }

// interface IPerson {
//   name: string;
//   country: string;
//   walk: () => void;
//   talk?: () => void;
// }

// interface IEmployee extends IPerson {
//   salary: number;
// }

// class Emp implements IEmployee {}

// use enums to restrict developer to choose from possible set of options
enum Departments {
  Finance = 10,
  Accounts,
  IT,
  HR,
}

var d: Departments = Departments.Accounts;
// console.log(d); // outputs 11
console.log(Departments[d]); // prints Accounts
// class Emp {
//   department: string;
// }
