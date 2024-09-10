abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getSepia():void // ABSTRACT METHODthis just means I dont have any definition for the method BUT I NEED THIS METHOD
    getReelTime(): number{
        //complext calculation
        return 8;
    }
}
// const surya=new TakePhoto("test","test"); cannot create new object from abstract classes
class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("SEPIA DAWGGG");
    }
}
const surya= new Instagram("test" , "test", 3); //this works absolutely fine
export{}