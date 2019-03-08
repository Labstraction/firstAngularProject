export class Court {
// tslint:disable-next-line: max-line-length
    constructor( private _id : number,private _name: string, private _sportType: string, private _price: number,  private _isCovered: boolean,  private _isSeven : boolean) { }
    
   
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }
    public get sportType(): string {
        return this._sportType;
    }
    public set sportType(v: string) {
        this._sportType = v;
    }
    public get price(): number {
        return this._price;
    }
    public set price(v: number) {
        this._price = v;
    }
    public get isCovered(): boolean {
        return this._isCovered;
    }
    public set isCovered(v: boolean) {
        this._isCovered = v;
    }
    
  
    
    public get isSeven() : boolean
     {
        return this._isSeven;
    }
    public set isSeven(v : boolean
        ) {
        this._isSeven = v;
    }

    public maxPlayer() :number {
        if (this._sportType==="tennis") {
            return 4
        }else if(this._isSeven){
            return 14;
        }
        return 10;
    }
    


}