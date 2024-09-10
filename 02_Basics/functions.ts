function addTwo(num: number): number{
    return num+2;
    // return "hello";
}
function getUpper(val: string){
    return val.toUpperCase();
}
function signUpUser(name: string, email: string, isPaid:boolean){}
let loginUser = (name: string , email: string , isPaid: boolean = false)=>{};
addTwo(5);
getUpper("Surya");
signUpUser("Surya", "surya@hotmail.com" , true);
loginUser("Surya" , "Surya@hotmail.com");


// function getValue(myVal: number){
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK";
// } return two types of values

// value returning in arrow function
// let getHello = (s: string):string => {return ""} 

const heros = ["thor", "spiderman", "Ironman"];
heros.map((hero): string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//Never is used when you want to handle and error => termination of execution
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}




export{}