const score: Array<number> =[]

function identityOne(val: boolean | number):boolean | number{
    return val;
}
function identityTwo(val: any): any{
    return val; //takes any input but gives any type of output
}
function identityThree<Type>(val: Type):Type {
    return val; //input can be anything but once taken output is locked
}
function identityFour<T>(val: T):T {
    return val; //input can be anything but once taken output is locked
}

interface Bottle{
    brand: string,
    type: number
}
// identityFour<Bottle>({}) 
identityThree("Surya");

function getSearchProducts<T>(products: T[]): T{
    //..do some operations
    const myIndex=3;
    return products[3];
}
// CONVERTING ABOVE CODE TO ARROW FUNCTION
const getMoreSearchProducts = <T>(products: T[]):T =>{return products[3]}

interface Database{
    connection: string,
    username: string,
    password: string
}
function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

interface Quiz{
    name: string,
    type:string
}
interface Course{
    bame: string,
    author: string,
    subject: string
}

class Sellable <T>{
    public cart: T[] = [];
    addToCard(product: T){
        this.cart.push(product);
    }
}




export{}