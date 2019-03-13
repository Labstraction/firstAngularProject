export class Reservation 
{   
        constructor( public id : number = 0, 
                     public nameCourt: string = "", 
                     public nameMember: string = "", 
                     public isDouble: boolean = false,
                     public date: Date = null) 
                     { }       
}
        
   