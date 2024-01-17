"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "aryan",
    email: "aryan@45.com",
    isactive: true
};
// Accept the object as parameter in the function 
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Taniya", isPaid: true });
// Bad behavouir of object in Ts 
var user1 = { name: "prem", isPaid: false, price: 499 };
createUser(user1);
// Return object explicitly
function createCourse() {
    return { name: "react.js", price: 399 };
}
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function PrintArea(A) {
    console.log("The area of the surface is the " + A.l);
}
PrintArea({ l: 4, b: 4 });
var S1 = {
    _id: 898993,
    name: "pratik",
    rollName: 220
};
