import { Sound } from './Bark';

export class DogDoor{
  
  private _timeoutId:NodeJS.Timeout | null=null

  constructor(private _sound:Sound,private _open=false){}

  public open(ms:number=2000){
    
        this._open = true

        this._timeoutId = setTimeout(()=>{

        this.close()

        },ms)

  }

  public getSound(){
    return this._sound
  }
  public close(){

    if(this._timeoutId)clearTimeout(this._timeoutId)
    
    this._open=false

  }

  public isOpen():boolean{
    return this._open
  }

}