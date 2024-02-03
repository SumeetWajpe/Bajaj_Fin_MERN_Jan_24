// var str = "Hello Typescript !"; // type inference
let str: string = "Hello Typescript !"; // type annotation
console.log(str);
console.log(typeof str);
// str = 10;

let b: boolean = true;
let n: number = 10;

function Add(x: number, y: number): number | string {
  if (x > 0) {
    return x + y;
  }
  return "x should be greater than 0";
}

// Add(); // parameters are not optional bydefault
let result: string | number = Add(10, 20);
// Add("Hello", "World !");
// Optional Parameters
// function printBooks(title: string, price?: number, noOfPages?: number) {
//   console.log(title, price, noOfPages);
// }
// printBooks("Wings Of Fire");
// Default Parameters
function printBooks(
  title: string,
  price: number = 100,
  noOfPages: number = 100,
): void {
  console.log(title, price, noOfPages);
}
printBooks("Wings Of Fire");

//  Arrays
var cars = ["BMW", "AUDI"];
// OR
var moreCars = new Array<string>("TATA", "MAHINDRA");
cars.forEach((car: string) => console.log(car));

let [firstCar, secondCar] = cars;

// Enhanced Object Literal Syntax
let city = "Pune";
let company = "IBM";

// let companyDetails = { city: city, company: company };
// OR
let companyDetails = { city, company };

// ES8 Rest properties
let person = {
  name: "Sachin",
  sport: "Cricket",
  address: { country: "INDIA", city: "Mumbai" },
};

let {
  address: { country },
  ...remainingprops
} = person;

// console.log(remainingprops);

