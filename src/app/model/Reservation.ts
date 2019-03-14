export class Reservation 
{   
        constructor( public id : number = 0, 
                     public fieldName: string = "", 
                     public memberName: string = "", 
                     public isDouble: boolean = false,
                     public date: Date = null) 
                     { }       
}