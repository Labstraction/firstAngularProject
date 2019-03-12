export class Court {
// tslint:disable-next-line: max-line-length

    constructor( private _id : number = 0, 
                 private _name: string = "", 
                 private _sportType: number = 0, 
                 private _price: number = 0,    
                 private _terrainType: number = 0) 
                 { }
    
   
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
    public get sport(): number {
        return this._sportType;
    }
    public set sport(v: number) {
        this._sportType = v;
    }
    public get price(): number {
        return this._price;
    }
    public set price(v: number) {
        this._price = v;
    }
    public get terrain(): number {
        return this._terrainType;
    }
    public set terrain(v: number) {
        this._terrainType = v;
    }
    
  
    
  


    


}