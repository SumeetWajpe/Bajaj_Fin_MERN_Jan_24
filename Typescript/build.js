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
    constructor(name = "", speed = 0) {
        this.carMake = "1983";
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        return `The car ${this.name} is running @ ${this.speed} kmph !`;
    }
}
let carObj = new Car();
class JamesBondCar extends Car {
    constructor(name, speed, isArmed) {
        super(name, speed);
        this.isArmed = false;
        this.isArmed = isArmed;
    }
    accelerate() {
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
var Departments;
(function (Departments) {
    Departments[Departments["Finance"] = 10] = "Finance";
    Departments[Departments["Accounts"] = 11] = "Accounts";
    Departments[Departments["IT"] = 12] = "IT";
    Departments[Departments["HR"] = 13] = "HR";
})(Departments || (Departments = {}));
var d = Departments.Accounts;
// console.log(d); // outputs 11
console.log(Departments[d]); // prints Accounts
// class Emp {
//   department: string;
// }
// Generics
function Swap(x, y) {
    let temp = x;
    x = y;
    y = temp;
    console.log(x, y);
}
Swap(10, 20);
Swap("X", "Y");
class Point {
}
var point = new Point();
