"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Surya",
    email: "surya@hotmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "surya", isPaid: false });
// function createCourse():{}{} this means the function should always return an object
// createCourse():{name: string, price: number}{} this means the function should always return an object with properties "name" and "price"
function createCourse() {
    return { name: "ReactJs", price: 399 };
}
function createNewUser(user) { }
createNewUser({ _id: 1, name: "", email: "", isActive: false });
var myUser = {
    _id: 1,
    name: "Surya",
    email: "surya@hotmail.com",
    isActive: false
};
myUser.email = "surya@gmail.com";


