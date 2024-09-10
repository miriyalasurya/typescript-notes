function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val+5;
}

function provideId(id: string | null){
    if(!id){
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}

function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs == "string"){
            for(const s of strs){
                console.log(s);
            }
        }else{
            console.log(strs);
        }
    }
}

interface User{
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}
function isAdmin(account: User | Admin){
    if("isAdmin" in account){
        return isAdmin;
    }else{
        console.log("This account is not admin");
    }
}

function logValue(x: Date | string){
    if(x instanceof Date){             // check whether this is instance of that object => only apaplicable where new keyword can be used for
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}


type Fish={swim:() => void};
type Bird={bird:() => void};

function isFish(pet: Fish | Bird): pet is Fish{ //this hsould be included so that we can return the type of "pet"
    return (pet as Fish).swim !== undefined // this only returns whether true of false
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet;                   // if "pet is fish" is not added its still confused what type this is
        return "Fish Food";
    }else{
        return "Bird Food";
    }
}

// DISCRIMINATED UNION
interface Circle{
    kind: "circle",
    radius: number
}
interface Square{
    kind: "square",
    side: number
}
interface Rectangle{
    kind: "reactangle",
    length: number,
    breadth: number
}
type Shape = Circle | Square;
function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius**2;
    }else{
        return shape.side * shape.side;
    }
} 
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius**2;
        case "square":
            return shape.side * shape.side;
    }
}


export {};