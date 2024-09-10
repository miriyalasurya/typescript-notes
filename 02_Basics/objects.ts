const user = {
    name: "Surya",
    email: "surya@hotmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}
createUser({name: "surya", isPaid: false});

// function createCourse():{}{} this means the function should always return an object
// createCourse():{name: string, price: number}{} this means the function should always return an object with properties "name" and "price"
function createCourse():{name: string, price: number}{
    return{name:"ReactJs", price:399};
}

// TYPE ALIASING
type User = {
    readonly _id: number, //readonly is a keyword nobody can read this
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number // "?:" implies that this field is optional
} //User is now a type in itself

function createNewUser(user: User){} 
createNewUser({_id: 1, name: "", email: "", isActive: false});

let myUser: User= {
    _id: 1,
    name: "Surya",
    email: "surya@hotmail.com",
    isActive: false
}
myUser.email="surya@gmail.com";
// myUser._id=124; //THIS IS READONLY cant be changed

type cardNumber = {
    cardnumber: number
}
type cardDate = {
    carddate: number
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
} // mixing and matching to create another new type using existing types






export{}