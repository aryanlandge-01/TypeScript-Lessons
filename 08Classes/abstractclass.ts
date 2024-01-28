abstract class TakePhoto {
    constructor(
       public cameraMode: string,
       public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        // calculation of watchers
        return 9393
    }
}

// const AL = new TakePhoto("test","Test")


class Instagram extends TakePhoto{
    constructor(
       public cameraMode: string,
       public filter: string, 
       public burst: number,
       ){
           super(cameraMode,filter)
       }


       getSepia(): void {
           console.log("sepia");         
       }
}

const hcv = new Instagram("portrait","cool",898);

export{}
