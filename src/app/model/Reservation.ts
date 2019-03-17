export class Reservation 
{   
        constructor( public id : number = 0, 
                     public courtName: string = "",
                     public memberId: number = 0, 
                     public courtId: number = 0,
                     public challengeId: number = 0,  
                     public memberName: string = "", 
                     public memberSurname: string = "", 
                     public isDouble: boolean = false,
                     public date: Date = null,
                     public price: number = 0,
                     public maxPlayer: number = 0,
                     public courtSportString: string = "") 
                     { }       
}