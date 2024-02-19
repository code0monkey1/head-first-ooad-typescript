import { Bark } from "./Bark";
import { DogDoor } from "./DogDoor";

export class BarkRecognizer{  

      constructor(private dogDoor:DogDoor ){}
        
      public recognize(bark:Bark) {
            
        if( this.isOwnersDog(bark))this.dogDoor.open()

      }

      private isOwnersDog(bark:Bark){

        return  this.dogDoor.getSounds().some( sound => sound.equals(bark))

      }
    
    
    }