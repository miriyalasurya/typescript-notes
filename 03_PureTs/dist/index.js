"use strict";
// class User {
//     email: string
//     name: string
//     private readonly city: string = "" // this is private and cant be accessed outside class.
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
//SAME ABOVE CODE but PROFESSIONAL IMPLEMENTATION
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //accessible by this class and classes that inherits this but not outside
        this.city = "";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    deleteToken() {
        console.log();
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 69;
    }
}
const surya = new User("surya@gmail.com", "surya");
// surya.city="Hyderabad"
