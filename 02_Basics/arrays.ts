const superHeros: string[] = []; //array of string if not mentioned type becomes "never"
const twoDimensional: number[][] =[[]]; // 2D array of numbers
superHeros.push("Surya");
const heroPower: Array<number> = []; //Another way of declaring an array with type "number"

type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = [];
allUsers.push({name: "surya",isActive: false})
// console.log(allUsers[0].name);
