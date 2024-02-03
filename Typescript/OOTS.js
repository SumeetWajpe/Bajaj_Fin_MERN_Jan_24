// interface IPerson {
//   name: string;
//   sport: string;
//   country: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let person: IPerson = {
//   name: "Sachin",
//   sport: "Cricket",
//   xyz: 123,
//   country: "INDIA",
// };
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = ""; }
        if (speed === void 0) { speed = 0; }
        this.carMake = "1983";
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car ".concat(this.name, " is running @ ").concat(this.speed, " kmph !");
    };
    return Car;
}());
var carObj = new Car();
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, isArmed) {
        var _this = _super.call(this, name, speed) || this;
        _this.isArmed = false;
        _this.isArmed = isArmed;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + "Is it armed ?" + this.isArmed;
    };
    return JamesBondCar;
}(Car));
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
