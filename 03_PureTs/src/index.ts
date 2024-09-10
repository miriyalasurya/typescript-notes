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
    protected _courseCount=1; //accessible by this class and classes that inherits this but not outside
    readonly city: string = ""
    constructor(
        public email: string, 
        public name: string
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`;
    }
    get courseCount():number{
        return this._courseCount;
    }

    private deleteToken(){
        console.log();
    }

    set courseCount(courseNum){  //setter cannot return anything!!!
        if(courseNum<=1){
            throw new Error("Course Count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User{ //inheritence
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount=69;       
    }
}

const surya = new User("surya@gmail.com", "surya")
// surya.city="Hyderabad"