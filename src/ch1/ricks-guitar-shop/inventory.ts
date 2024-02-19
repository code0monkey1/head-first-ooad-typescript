import { Guitar, TGuitarProps, TGuitarSpecs } from "./guitar";

export class Inventory{

  constructor(private guitars:Guitar[]){}

  addGuitar(guitarProps:TGuitarProps){

    const guitar = new Guitar(guitarProps)

    this.guitars.push(guitar)
  }

  getGuitar(guitar:Guitar):Guitar|undefined{

   return   this.guitars.find( g => guitar.getSerialNumber())
  }

}

interface IFilter<T> {
  execute(all:T[]):T[]
}

export class FilterGuitars implements IFilter<Guitar> {

  constructor(private filters:Partial<TGuitarSpecs>){}

  execute(guitars:Guitar[]): Guitar[] {
        
    return  guitars.filter( g => {
        
         if(this.filters.backWood){
            if (g.getSpecs().getBackWood() !== this.filters.backWood) return false
         }
         if(this.filters.builder){
           if (g.getSpecs().getBuilder() !== this.filters.builder) return false

         }
         if(this.filters.model){
            if (g.getSpecs().getModel() !== this.filters.model) return false
         }
         if(this.filters.topWood){
             if (g.getSpecs(). getTopWood() !== this.filters.topWood) return false
         }
         if(this.filters.type){
           if (g.getSpecs().getType() !== this.filters.type) return false

         }

         return true
         
     })
      
       
  }
   
}