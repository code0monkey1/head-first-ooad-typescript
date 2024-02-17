export class DogDoor{

  constructor(private isOpen=false){}


  public open(){
    
    let timeoutId: NodeJS.Timeout ;

    return()=>{

      if(timeoutId)clearTimeout(timeoutId)
      
      this.isOpen=true

      const timeOut= setTimeout(()=>{
         this.isOpen=false
         
      },2000)

    }   

  }

}