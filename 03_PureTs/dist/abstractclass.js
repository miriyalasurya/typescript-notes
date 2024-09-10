"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //complext calculation
        return 8;
    }
}
// const surya=new TakePhoto("test","test"); cannot create new object from abstract classes
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("SEPIA DAWGGG");
    }
}
const surya = new Instagram("test", "test", 3); //this works absolutely fine
