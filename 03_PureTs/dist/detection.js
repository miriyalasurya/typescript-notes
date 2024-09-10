"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 5;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs == "string") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else {
            console.log(strs);
        }
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return isAdmin;
    }
    else {
        console.log("This account is not admin");
    }
}
function logValue(x) {
    if (x instanceof Date) { // check whether this is instance of that object => only apaplicable where new keyword can be used for
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined; // this only returns whether true of false
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // if "pet is fish" is not added its still confused what type this is
        return "Fish Food";
    }
    else {
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.side * shape.side;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
    }
}
