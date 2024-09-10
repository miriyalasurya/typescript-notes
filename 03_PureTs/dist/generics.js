"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val; //takes any input but gives any type of output
}
function identityThree(val) {
    return val; //input can be anything but once taken output is locked
}
function identityFour(val) {
    return val; //input can be anything but once taken output is locked
}
// identityFour<Bottle>({}) 
identityThree("Surya");
function getSearchProducts(products) {
    //..do some operations
    const myIndex = 3;
    return products[3];
}
// CONVERTING ABOVE CODE TO ARROW FUNCTION
const getMoreSearchProducts = (products) => { return products[3]; };
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCard(product) {
        this.cart.push(product);
    }
}
