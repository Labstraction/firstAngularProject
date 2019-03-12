export class Member {
    // tslint:disable-next-line: max-line-length
    
        constructor( private _id : number = 0, 
                     private _name: string = "", 
                     private _surname: string = "", 
                     private _dateOfRegistration: string = "", 
                     private _dateOfBirthday: string = "", 
                     ) 
                     { }
        
       
        public get id() : number {
            return this._id;
        }
        public set id(v : number) {
            this._id = v;
        }

        public get name() : string {
            return this._name;
        }
        public set name(v : string) {
            this._name = v;
        }

        public get surname() : string {
            return this._surname;
        }
        public set surname(v : string) {
            this._surname = v;
        }

        public get dateOfRegistration() : string {
            return this._dateOfRegistration;
        }
        public set dateOfRegistration(v : string) {
            this._dateOfRegistration = v;
        }

        public get dateOfBirthday() : string {
            return this._dateOfBirthday;
        }
        public set dateOfBirthday(v : string) {
            this._dateOfBirthday = v;
        }

    }
        
   