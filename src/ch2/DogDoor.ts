export class DogDoor{

  constructor(private _open=false){}

  public open(){
      this._open = true
  }
  public close(){

    this._open=false

  }

  public isOpen():boolean{
    return this._open
  }

}