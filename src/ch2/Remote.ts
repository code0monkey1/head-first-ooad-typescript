import { DogDoor } from "./DogDoor";

export class Remote{

      private _timeoutId:NodeJS.Timeout | null=null
      private _dogDoor:DogDoor
      private _barkSensor:IBarkSensor

      constructor(private dogDoor:DogDoor , private barkSensor:IBarkSensor){
           this._dogDoor=dogDoor,
           this._barkSensor=barkSensor
           this.monitorSensor(1000)
      }

    public monitorSensor(interval: number) {
    setInterval(() => {
      if (this._barkSensor.isBarking()) {
        this.dogDoor.open();
        setTimeout(() => {
          this.dogDoor.close();
        }, 2000);
      }
    }, interval);
  }

    public pressButton() {

      if (this.dogDoor.isOpen()) {
        

        if (this._timeoutId) clearTimeout(this._timeoutId);
      
        this.dogDoor.close()
      }
      else{

      this.dogDoor.open()
       
      this._timeoutId = setTimeout(() => {
          
        this.dogDoor.close()
        this._timeoutId=null

      }, 2000);

    };
  }

  }

  export interface IBarkSensor{
     
    isBarking():boolean

  }

  export class BarkSensor implements IBarkSensor{
     
    constructor(private sensor:boolean = false){}

    isBarking(): boolean {
       return this.sensor
    }
    
  }