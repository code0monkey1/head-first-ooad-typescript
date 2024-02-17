import { Builder, Type, Wood } from "./types";


export type TGuitarProps = {
  guitarSpecs :  GuitarSpecs;
  serialNumber: string;
  price: number;
};

export type TGuitarSpecs ={
  builder: Builder;
  model: string;
  type: Type;
  backWood: Wood;
  topWood: Wood;
}


export class GuitarSpecs{

  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;

  constructor(private guitarSpecs :TGuitarSpecs){
    this.builder=guitarSpecs.builder,
    this.model=guitarSpecs.model,
    this.type=guitarSpecs.type,
    this.backWood=guitarSpecs.backWood,
    this.topWood=guitarSpecs.topWood
  }

  getBuilder(): Builder {
    return this.builder;
  }

  getModel(): string {
    return this.model;
  }

  getType(): Type {
    return this.type;
  }

  getBackWood(): Wood {
    return this.backWood;
  }

  getTopWood(): Wood {
    return this.topWood;
  }

}

export class Guitar {
  private guitarSpecs :GuitarSpecs
  private serialNumber: string;
  private price: number;

  constructor(guitarProps:TGuitarProps) {
    this.guitarSpecs=guitarProps.guitarSpecs
    this.serialNumber = guitarProps.serialNumber;
    this.price = guitarProps.price;
  }
  getGuitarSpecs():GuitarSpecs{
    return this.guitarSpecs
  }
  getSerialNumber(): string {
    return this.serialNumber;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(newPrice: number): void {
    this.price = newPrice;
  }
}