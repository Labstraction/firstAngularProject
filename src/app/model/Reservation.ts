export class Reservation 
{   
        constructor( public id : number = 0, 
                     public fieldName: string = "",
                     public memberId: number = 0, 
                     public fieldId: number = 0, 
                     public memberName: string = "", 
                     public isDouble: boolean = false,
                     public date: Date = null) 
                     { }       
}