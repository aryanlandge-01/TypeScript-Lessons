"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 4;
}
function checkId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
// detection
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        //   (parameter) x: Date
    }
    else {
        console.log(x.toUpperCase());
        //   (parameter) x: string
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
