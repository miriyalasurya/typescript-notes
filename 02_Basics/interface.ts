interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string, //one way of declaring
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}
const surya: User = {dbId: 69, email: "surya@hotmail.com", userId: 6996, 
    startTrial: () => { return "trial started" }, getCoupon: (name: "WELCOMEBACK", off: 10)=>{ return 10; }};
    // NOTE that we havent given same variable name as per the interface in the "getCoupon" method

interface User{
    githubToken?: string  // THIS IS CALLED "REOPENING" of interface
}

interface Admin extends User{ //all properties of User are now also in Admin you can add as many as you want
    roles:"admin" | "ta" | "learner"
}


export{}