import { Builder, Type, Wood } from "./types";

export type TGuitarProps = {
  guitarSpecs :  GuitarSpecs;
  serialNumber: string;
  price: number;
};

export type TInstrumentSpecs={
  builder: Builder;
  model: string;
  type: Type;
  backWood: Wood;
  topWood: Wood;
}

export type TGuitarSpecs = TInstrumentSpecs & { numStrings:number}

export abstract class InstrumentSpecs{

  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;

 
  constructor(private specs :TInstrumentSpecs){
   
    this.builder=specs.builder,
    this.model=specs.model,
    this.type=specs.type,
    this.backWood=specs.backWood,
    this.topWood=specs.topWood
  
  }


}


export class GuitarSpecs  extends InstrumentSpecs{

  private numStrings:number

  constructor(private guitarSpecs :TGuitarSpecs){
    super(guitarSpecs)
 
    this.numStrings=guitarSpecs.numStrings
  }


}
 
export abstract class Instrument{
   
  constructor(private serialNumber:string,
    private price:number,
    ){}

  getSerialNumber(): string {
    return this.serialNumber
  }

  getPrice(): number {
    return this.price;
  }

   setPrice(newPrice: number): void {
    this.price = newPrice;
  }

  abstract getSpecs():InstrumentSpecs 

}


export class Guitar extends Instrument {
  
  constructor(guitarProps:TGuitarProps) {
    super(guitarProps.serialNumber,
      guitarProps.price)
    }
    
    getSpecs(): GuitarSpecs {
      return this.getSpecs()
    }

}


