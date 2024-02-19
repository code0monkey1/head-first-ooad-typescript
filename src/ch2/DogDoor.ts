import { Sound } from './Bark';

export class DogDoor{
  
  private _timeoutId:NodeJS.Timeout | null=null
  private _sounds:Sound[] = []

  constructor(private sound:Sound,private _open=false){
      this._sounds.push(sound)
  }

  public open(ms:number=2000){

       if(this.isOpen())return
    
        this._open = true

        this._timeoutId = setTimeout(()=>{

        this.close()

        },ms)

  }

  public getSounds(){
    return this._sounds
  }
  public close(){

    if(!this.isOpen())return

    if(this._timeoutId)clearTimeout(this._timeoutId)
    
    this._open=false

  }

  public isOpen():boolean{
    return this._open
  }

}