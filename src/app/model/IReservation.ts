export interface IReservation {
    id : number;
    isDouble : boolean;
    date : Date;
    memberId : number;
    fieldId : number;
    memberName : string;
    fieldName : string;
}
