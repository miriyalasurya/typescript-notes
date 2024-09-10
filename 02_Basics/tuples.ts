// let user: string[] = ["s"]
let user: [string, number, boolean]
user = ["surya", 1, true];
// user = [1, "surya", "xyz"]; //ORDER HAS TO BE MAINTAINED IN TUPLE

type User = [number, string];
const newUser: User =[112, "Surya"];
newUser[1] = "someName"; // we are able to chang value of a constant which is odd
// newUser.push(true) wont work patch aypoyindi


export{}