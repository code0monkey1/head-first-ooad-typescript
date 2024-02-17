import { DogDoor } from "./DogDoor";

export class Remote{
  
      constructor(private dogDoor:DogDoor){}

      public openDoor(){
        const open = this.dogDoor.open()
        open()
      }
}