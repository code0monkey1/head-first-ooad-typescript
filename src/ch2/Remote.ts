import { DogDoor } from "./DogDoor";

export class Remote{

      private _timeoutId:NodeJS.Timeout | null=null
      private _dogDoor:DogDoor

      constructor(private dogDoor:DogDoor){

           this._dogDoor=dogDoor
      
      }

    public pressButton() {

      if (this.dogDoor.isOpen()) this.dogDoor.close()
      else this.dogDoor.open()
       
  }

  }
