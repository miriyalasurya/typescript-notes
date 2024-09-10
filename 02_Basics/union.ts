let score: number | string = 33 //union => score can either be number or string
// score = true //error
type User = {
    name: string, 
    id: number
}
type Admin = {
    username: string, 
    id: number
}
let surya: User | Admin = {name: "Surya", id: 12}
surya = {username: "SuryaAdmin", id:15}


function getDbId(id: number | string){
    // id.toLowerCase();  this will throw and error so we need to check type of id before performing operation
    if(typeof id === "string"){
        id.toLocaleLowerCase();  
    }
    console.log(`the DB id is ${id}`);
}

// const data: number[] | string[] = [1,2,3] // this wont work wrong syntax
const data: (number|string)[] = [1, 2, 3, "4"]

let seatAllotment: "aisle" | "middle" | "window" // only these can be assigned
seatAllotment = "aisle"; 
// seatAllotment = "crew"; //will throw and error



export{}