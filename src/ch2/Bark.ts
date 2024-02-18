export abstract class Sound { 

  constructor(private sound:string){}
  
  getSound(){
       return this.sound
  }

 setSound(s:string){
    this.sound=s
  }
 
  abstract equals(s:Sound):boolean

}

export class Bark extends Sound{
    
  constructor(sound:string){
    super(sound)
  }
  
  equals(s:Sound){
    
    if(! (s instanceof Bark)){
      return false
    }

    return (this.getSound() === s.getSound())

  }

}
