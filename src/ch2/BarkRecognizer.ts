import { Bark } from "./Bark";
import { DogDoor } from "./DogDoor";

export class BarkRecognizer{  

      constructor(private dogDoor:DogDoor ){}
        
      public recognize(bark:Bark) {
            
        if(!this.dogDoor.isOpen()  && this.isOwnersDog(bark)){
                
          this.dogDoor.open()

        }

            }
      private isOwnersDog(bark:Bark){

        return  bark.equals(this.dogDoor.getSound())

      }
    
    
    }