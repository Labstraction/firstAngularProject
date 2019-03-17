import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Court } from "../model/Court";
import { CourtsService } from "../model/courts.service";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-insert-court-reactive',
  templateUrl: './insert-court-reactive.component.html',
  styleUrls: ['./insert-court-reactive.component.css']
})
export class InsertCourtReactiveComponent implements OnInit {
  
  newCourtForm: FormGroup;
  court = new Court();
  id: number;
  sportIndex = -1;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private courtService: CourtsService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.id = +param;
      if (this.id != 0) {
        this.courtService.getCourts().subscribe(
          courts => {
            this.court = courts.find(court => court.id === this.id)
            
            if(this.court.sport===2){
              this.sportIndex=2;
            }

            this.populateTestData();
          },
          error => console.log(error))
      }
    }

    this.newCourtForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0.00, [Validators.required, priceRange(1, 100)]],
      sport: ['', [Validators.required]],
      isSeven: [false, [Validators.required]],
      terrain: ['', [Validators.required]]
    });
  }

  populateTestData(): void {
    this.newCourtForm.patchValue({
      name: this.court.name,
      price: this.court.price,
      sport: this.court.sport,
      isSeven: false, //questo serve perchè in caso di modifica, essendo di default calcio a cinque, 
                      //se cambiamo da un campo a 7 a un campo a 5, senza aver toccato nessuno dei due radio button
                      //la modifica non viene presa
      terrain: this.court.terrain
    });
  }

  save() {
    console.log(this.newCourtForm);
    console.log('Saved: ' + JSON.stringify(this.newCourtForm.value));

    if (this.id == 0) {
      if (this.newCourtForm.valid) {
        this.court = this.newCourtForm.value;
      }
      this.courtService.addCourt(this.court).subscribe();
    }
    
    else {
      
      if (this.newCourtForm.valid) {
        this.court.name = this.newCourtForm.value.name;
        this.court.price = this.newCourtForm.value.price;
        this.court.sport = this.newCourtForm.value.sport;
        this.court.isSeven = this.newCourtForm.value.isSeven
        this.court.terrain = this.newCourtForm.value.terrain;
      }
      this.courtService.editCourt(this.court).subscribe();
    }
  }

  public onSportRadioSelected(e){
    
    this.sportIndex=-1;  
    if (e.target.value && e.target.value === "2"){
      this.sportIndex=2;
    }

    console.log(this.sportIndex);
  }

}

  // setNotification(notifyVia: string): void {
  //   const phoneControl = this.customerForm.get('phone');
  //   if (notifyVia === 'text') {
  //     phoneControl.setValidators(Validators.required);
  //   } else {
  //     phoneControl.clearValidators();
  //   }
  //   phoneControl.updateValueAndValidity();
  // }

function priceRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
}

// function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
//   const emailControl = c.get('email');
//   const confirmControl = c.get('confirmEmail');

//   if (emailControl.pristine || confirmControl.pristine) {
//     return null;
//   }

//   if (emailControl.value === confirmControl.value) {
//     return null;
//   }
//   return { 'match': true };
// }

// function ratingRange(min: number, max: number): ValidatorFn {
//   return (c: AbstractControl): { [key: string]: boolean } | null => {
//     if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
//       return { 'range': true };
//     }
//     return null;
//   };
// }


