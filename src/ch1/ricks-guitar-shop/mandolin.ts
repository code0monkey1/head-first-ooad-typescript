import { Instrument, InstrumentSpecs, TInstrumentSpecs } from "./guitar"

export enum Style{
  A='A',
  B='B'
}


type TMandolinSpecs =TInstrumentSpecs & {style:Style}

class MandolinSpecs extends InstrumentSpecs {

  constructor( specs :TMandolinSpecs){
    super(specs)
  }

}


type TMandolinProps={
  serialNumber:string,
  price:number,
  specs:MandolinSpecs
}

class Mandolin extends Instrument{
  
      
      constructor( mandolinProps:TMandolinProps){
        
        super( mandolinProps.serialNumber, mandolinProps.price)
      
      }

      getSpecs(): MandolinSpecs {
         
         return this.getSpecs()
      }
      
  
}
    
  
