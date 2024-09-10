let greetings: string="Hey Surya!"
greetings.toUpperCase();
console.log(greetings);

//number
// let userId : number = 334455;  
let userId = 334455; //TS automatically infer it as a number

//Boolean
let isLoggedIn : boolean = true;

//any
let hero : string; // if ": string" is not mentioned it'll infer it as "any" not good
function getHero(){
    return "thor";
}

hero=getHero();

export{}