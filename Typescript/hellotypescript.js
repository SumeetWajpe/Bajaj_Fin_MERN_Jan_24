var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// var str = "Hello Typescript !"; // type inference
var str = "Hello Typescript !"; // type annotation
console.log(str);
console.log(typeof str);
// str = 10;
var b = true;
var n = 10;
function Add(x, y) {
    if (x > 0) {
        return x + y;
    }
    return "x should be greater than 0";
}
// Add(); // parameters are not optional bydefault
var result = Add(10, 20);
// Add("Hello", "World !");
// Optional Parameters
// function printBooks(title: string, price?: number, noOfPages?: number) {
//   console.log(title, price, noOfPages);
// }
// printBooks("Wings Of Fire");
// Default Parameters
function printBooks(title, price, noOfPages) {
    if (price === void 0) { price = 100; }
    if (noOfPages === void 0) { noOfPages = 100; }
    console.log(title, price, noOfPages);
}
printBooks("Wings Of Fire");
//  Arrays
var cars = ["BMW", "AUDI"];
// OR
var moreCars = new Array("TATA", "MAHINDRA");
cars.forEach(function (car) { return console.log(car); });
var firstCar = cars[0], secondCar = cars[1];
// Enhanced Object Literal Syntax
var city = "Pune";
var company = "IBM";
// let companyDetails = { city: city, company: company };
// OR
var companyDetails = { city: city, company: company };
// ES8 Rest properties
var person = {
    name: "Sachin",
    sport: "Cricket",
    address: { country: "INDIA", city: "Mumbai" },
};
var country = person.address.country, remainingprops = __rest(person, ["address"]);
// console.log(remainingprops);
